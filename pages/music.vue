<template>
  <div>
    <intro-text title="Music">
      <p>
        One of my favorite things to do is to listen to music. Especially when I
        work and focus on a task at hand. My favorite genre is electronic music
        but I don't really have a spesific sub-genre. Most of the time I use
        <a
          class="
            text-gray-900
            dark:text-gray-300
            pb-1
            transition
            duration-300
            border-b-2 border-transparent
            hover:border-gray-900
            dark:hover:border-gray-300
          "
          href="https://open.spotify.com/user/_mujdat"
          >Spotify</a
        >, so here you'll will find my playlists, recently played and saved
        songs.
      </p>
      <p>
        I also try to produce music as a hobby. I'm still learning but once I
        have something to share, this would be the place to find it.
      </p>
    </intro-text>
    <music-grid
      class="mb-16"
      :loading="playlistsLoading"
      title="My Playlists"
      :items="playlists"
      playlists
    ></music-grid>
    <music-grid
      class="mb-16"
      :loading="recentlyPlayedTracksLoading"
      title="Recently Played Songs"
      :items="recentlyPlayedTracks"
      :preview-item="selectedTrack"
      @play="playPreviewTrack"
      @pause="pausePreviewTrack"
    ></music-grid>
    <music-grid
      class="mb-16"
      :loading="recentlySavedTracksLoading"
      title="Recently Saved Songs"
      :items="recentlySavedTracks"
      :preview-item="selectedTrack"
      @play="playPreviewTrack"
      @pause="pausePreviewTrack"
    ></music-grid>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  useStore,
  useMeta,
  useRouter,
} from '@nuxtjs/composition-api'

import { RootState } from 'store'
// @ts-ignore
import { cloneDeep } from 'lodash'

interface SelectedPreviewTrack {
  name: string
  id: string
  uuid: string
  file: any
  isPlaying: boolean
}

export default defineComponent({
  name: 'MusicPage',
  setup() {
    const store = useStore<RootState>()
    const router = useRouter()
    const leavingRoute = ref(false)
    const selectedTrack = ref<SelectedPreviewTrack | null>(null)

    useMeta({ title: store.state.meta.about.title })

    store.dispatch('music/getRecentlyPlayedTracks')
    store.dispatch('music/getRecentlySavedTracks')
    store.dispatch('music/getPlaylists')

    const musicTitle = computed(() => {
      return store.state.meta.music.title
    })
    const playlists = computed(() => {
      return store.state.music.playlists
    })
    const recentlyPlayedTracks = computed(() => {
      return store.state.music.recentlyPlayedTracks
    })
    const recentlySavedTracks = computed(() => {
      return store.state.music.recentlySavedTracks
    })
    const playlistsLoading = computed(() => {
      return store.state.music.playlistsLoading
    })
    const recentlyPlayedTracksLoading = computed(() => {
      return store.state.music.recentlyPlayedTracksLoading
    })
    const recentlySavedTracksLoading = computed(() => {
      return store.state.music.recentlySavedTracksLoading
    })

    const playPreviewTrack = (previewTrack: SelectedPreviewTrack) => {
      const clonedTrack = cloneDeep(previewTrack)
      if (selectedTrack.value === null) {
        selectedTrack.value = clonedTrack
        if (selectedTrack && selectedTrack.value) {
          selectedTrack.value.file.play()
          selectedTrack.value.isPlaying = true
          selectedTrack.value.file.loop = true
        }
      } else if (
        selectedTrack.value &&
        selectedTrack.value.id !== previewTrack.id
      ) {
        selectedTrack.value.file.pause()
        selectedTrack.value.isPlaying = false
        selectedTrack.value = clonedTrack
        if (selectedTrack && selectedTrack.value) {
          selectedTrack.value.file.play()
          selectedTrack.value.isPlaying = true
          selectedTrack.value.file.loop = true
        }
      }
    }
    const pausePreviewTrack = (previewTrack: any) => {
      const clonedTrack = cloneDeep(previewTrack)
      selectedTrack.value = clonedTrack
      if (selectedTrack && selectedTrack.value) {
        selectedTrack.value.file.pause()
        selectedTrack.value.isPlaying = false
        selectedTrack.value = null
      }
    }

    // eslint-disable-next-line
    router.beforeEach((to, from, next) => {
      if (selectedTrack && selectedTrack.value) {
        selectedTrack.value.file.pause()
      }
      next()
    })

    return {
      playPreviewTrack,
      pausePreviewTrack,
      musicTitle,
      playlists,
      recentlyPlayedTracks,
      recentlySavedTracks,
      playlistsLoading,
      recentlyPlayedTracksLoading,
      recentlySavedTracksLoading,
      leavingRoute,
      selectedTrack,
    }
  },
  head: {},
})
</script>
