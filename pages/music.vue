<template>
  <div>
    <div>
      <h2 class="title">{{ $t('pages.music.title') }}</h2>
      <div
        class="prose md:max-w-none dark:prose-dark"
        v-html="$sanitize($t('pages.music.text'))"
      ></div>
    </div>
    <div class="mt-16">
      <music-grid
        class="mb-16"
        :loading="playlistsLoading"
        :title="$t('pages.music.plTitle')"
        :items="playlists"
        playlists
      ></music-grid>
      <music-grid
        class="mb-16"
        :loading="recentlyPlayedTracksLoading"
        :title="$t('pages.music.rpTitle')"
        :items="recentlyPlayedTracks"
        :preview-item="selectedTrack"
        @play="playPreviewTrack"
        @pause="pausePreviewTrack"
      ></music-grid>
      <music-grid
        class="mb-16"
        :loading="recentlySavedTracksLoading"
        :title="$t('pages.music.rsTitle')"
        :items="recentlySavedTracks"
        :preview-item="selectedTrack"
        @play="playPreviewTrack"
        @pause="pausePreviewTrack"
      ></music-grid>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  useStore,
  useMeta,
  useRouter
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
    const selectedTrack = ref<SelectedPreviewTrack | null>(null)

    useMeta({ title: store.state.meta.music.title })

    store.dispatch('music/getRecentlyPlayedTracks')
    store.dispatch('music/getRecentlySavedTracks')
    store.dispatch('music/getPlaylists')

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
      playlists,
      recentlyPlayedTracks,
      recentlySavedTracks,
      playlistsLoading,
      recentlyPlayedTracksLoading,
      recentlySavedTracksLoading,
      selectedTrack
    }
  },
  head: {}
})
</script>
