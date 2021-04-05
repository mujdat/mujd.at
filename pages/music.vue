<template>
  <div>
    <intro-text title="Music">
      <p>
        One of my favorite things to do is to listen to music. Especially when I
        work and focus on a task at hand. My favorite genre is electronic music
        but I don't really have a spesific sub-genre. Most of the time I use
        <a
          class="text-gray-900 dark:text-gray-300 hover:underline"
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
      @play="playPreviewTrack($event)"
      @pause="pausePreviewTrack($event)"
    ></music-grid>
    <music-grid
      class="mb-16"
      :loading="recentlySavedTracksLoading"
      title="Recently Saved Songs"
      :items="recentlySavedTracks"
      :preview-item="selectedTrack"
      @play="playPreviewTrack($event)"
      @pause="pausePreviewTrack($event)"
    ></music-grid>
  </div>
</template>
<script>
import { cloneDeep } from 'lodash'
export default {
  name: 'MusicPage',
  /* eslint-disable-next-line */
  beforeRouteLeave(to, from, next) {
    if (this.selectedTrack) {
      this.selectedTrack.file.pause()
    }
    next()
  },
  data() {
    return {
      leavingRoute: false,
      selectedTrack: null,
    }
  },
  head: {
    title:
      'Müjdat Korkmaz | Music | Front-End Developer based in Dresden, Germany',
  },
  computed: {
    playlists() {
      return this.$store.state.music.playlists
    },
    recentlyPlayedTracks() {
      return this.$store.state.music.recentlyPlayedTracks
    },
    recentlySavedTracks() {
      return this.$store.state.music.recentlySavedTracks
    },
    playlistsLoading() {
      return this.$store.state.music.playlistsLoading
    },
    recentlyPlayedTracksLoading() {
      return this.$store.state.music.recentlyPlayedTracksLoading
    },
    recentlySavedTracksLoading() {
      return this.$store.state.music.recentlySavedTracksLoading
    },
  },
  created() {
    this.$store.dispatch('music/getRecentlyPlayedTracks')
    this.$store.dispatch('music/getRecentlySavedTracks')
    this.$store.dispatch('music/getPlaylists')
  },
  methods: {
    playPreviewTrack(previewTrack) {
      const clonedTrack = cloneDeep(previewTrack)
      if (this.selectedTrack === null) {
        this.selectedTrack = clonedTrack
        this.selectedTrack.file.play()
        this.selectedTrack.isPlaying = true
        this.selectedTrack.file.loop = true
      } else if (
        this.selectedTrack &&
        this.selectedTrack.id !== previewTrack.id
      ) {
        this.selectedTrack.file.pause()
        this.selectedTrack.isPlaying = false
        this.selectedTrack = clonedTrack
        this.selectedTrack.file.play()
        this.selectedTrack.isPlaying = true
        this.selectedTrack.file.loop = true
      }
    },
    pausePreviewTrack(previewTrack) {
      const clonedTrack = cloneDeep(previewTrack)
      this.selectedTrack = clonedTrack
      this.selectedTrack.file.pause()
      this.selectedTrack.isPlaying = false
      this.selectedTrack = null
    },
  },
}
</script>
