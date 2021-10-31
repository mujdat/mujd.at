<template>
  <div>
    <div>
      <loading-indicator
        v-if="pageLoading && pageLoading[0]"
      ></loading-indicator>
      <div v-else-if="page && page.length">
        <h2
          class="
            text-3xl
            mb-6
            tracking-light
            font-extrabold
            text-gray-900
            dark:text-gray-300
          "
        >
          {{ page[0].data.title ? page[0].data.title[0].text : '' }}
        </h2>
        <prismic-rich-text
          class="prose dark:prose-dark"
          :field="page[0].data.content"
        />
      </div>
    </div>
    <div class="mt-16">
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

import { usePrismicAPI } from 'nuxt-use-prismic-api'

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

    const { page, pageLoading } = usePrismicAPI({
      data: 'page',
      method: 'getByUID',
      docType: 'page',
      uid: 'music'
    })

    return {
      page,
      pageLoading,
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
      selectedTrack
    }
  },
  head: {}
})
</script>
