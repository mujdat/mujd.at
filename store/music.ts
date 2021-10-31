import type { ActionTree, MutationTree } from 'vuex'

export interface MusicState {
  playlists: [] | null
  recentlyPlayedTracks: [] | null
  recentlySavedTracks: [] | null
  playlistsLoading: boolean
  recentlyPlayedTracksLoading: boolean
  recentlySavedTracksLoading: boolean
  spotifyIconGreen: string
  error: boolean
}

interface PlaylistsItem {
  id: number
  name: string
  description: string
  images: [{ url: string }]
  // eslint-disable-next-line camelcase
  external_urls: {
    spotify: string
  }
}

interface Track {
  id: string
  artists: []
  name: string
  // eslint-disable-next-line camelcase
  external_urls: {
    spotify: string
  }
  album: {
    images: any[]
  }
  // eslint-disable-next-line camelcase
  preview_url: string
}

interface Artist {
  name: string
  id: string
  // eslint-disable-next-line camelcase
  external_urls: {
    spotify: string
  }
}

interface RecentlyPlayedTracksItem {
  track: Track
}

const defaultMusicState: MusicState = {
  playlists: null,
  recentlyPlayedTracks: null,
  recentlySavedTracks: null,
  playlistsLoading: false,
  recentlyPlayedTracksLoading: false,
  recentlySavedTracksLoading: false,
  spotifyIconGreen: '/Spotify_Icon_CMYK_Green.png',
  error: false
}

export const state = () => ({
  ...defaultMusicState
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  SET_PLAYLISTS(state, playlists) {
    state.playlists = playlists
  },
  SET_RECENTLY_PLAYED_TRACKS(state, recentlyPlayedTracks) {
    state.recentlyPlayedTracks = recentlyPlayedTracks
  },
  SET_RECENTLY_SAVED_TRACKS(state, recentlySavedTracks) {
    state.recentlySavedTracks = recentlySavedTracks
  },
  SET_PLAYLISTS_LOADING(state, flag) {
    state.playlistsLoading = flag
  },
  SET_RECENTLY_PLAYED_TRACKS_LOADING(state, flag) {
    state.recentlyPlayedTracksLoading = flag
  },
  SET_RECENTLY_SAVED_TRACKS_LOADING(state, flag) {
    state.recentlySavedTracksLoading = flag
  },
  SET_ERROR(state, error) {
    state.error = error
  }
}

export const actions: ActionTree<RootState, RootState> = {
  getPlaylists({ commit, state }) {
    commit('SET_PLAYLISTS_LOADING', true)
    try {
      const getPlaylists = async () => {
        const response = await fetch('/.netlify/functions/spotifyPlaylists')
        if (response.ok) {
          const res = await response.json()
          const playlists = res.items.map((item: PlaylistsItem) => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              img: item.images[0] ? item.images[0].url : state.spotifyIconGreen,
              url: item.external_urls.spotify
            }
          })
          commit('SET_PLAYLISTS', playlists)
          commit('SET_PLAYLISTS_LOADING', false)
        }
      }
      getPlaylists()
    } catch (error) {
      commit('SET_ERROR', error)
      commit('SET_PLAYLISTS_LOADING', false)
    }
  },
  getRecentlyPlayedTracks({ commit, state }) {
    commit('SET_RECENTLY_PLAYED_TRACKS_LOADING', true)
    try {
      const getRecentlyPlayedTracks = async () => {
        const response = await fetch(
          '/.netlify/functions/spotifyRecentlyPlayedTracks'
        )
        if (response.ok) {
          const res = await response.json()
          const recentlyPlayedTracks = res.items.map(
            (item: RecentlyPlayedTracksItem) => {
              const artistsArray = item.track.artists.map((artist: Artist) => {
                return {
                  name: artist.name,
                  id: artist.id,
                  // @ts-ignore
                  uuid: this._vm.$uuid.v4(),
                  url: artist.external_urls.spotify
                }
              })
              return {
                name: item.track.name,
                id: item.track.id,
                // @ts-ignore
                uuid: this._vm.$uuid.v4(),
                url: item.track.external_urls.spotify,
                img: item.track.album.images[1]
                  ? item.track.album.images[1].url
                  : state.spotifyIconGreen,
                artists: artistsArray,
                preview_url: item.track.preview_url,
                demo: {
                  id: item.track.id,
                  // @ts-ignore
                  uuid: this._vm.$uuid.v4(),
                  name: item.track.name,
                  file: new Audio(item.track.preview_url),
                  isPlaying: false
                }
              }
            }
          )
          const uniqueTracks = [
            ...new Map(
              recentlyPlayedTracks.map((item: Track) => [item.id, item])
            ).values()
          ]
          const mostRecentlyPlayedTracks = uniqueTracks.slice(0, 4)
          commit('SET_RECENTLY_PLAYED_TRACKS', mostRecentlyPlayedTracks)
          commit('SET_RECENTLY_PLAYED_TRACKS_LOADING', false)
        }
      }
      getRecentlyPlayedTracks()
    } catch (error) {
      commit('SET_ERROR', error)
      commit('SET_RECENTLY_PLAYED_TRACKS_LOADING', false)
    }
  },
  getRecentlySavedTracks({ commit, state }) {
    commit('SET_RECENTLY_SAVED_TRACKS_LOADING', true)
    try {
      const getRecentlySavedTracks = async () => {
        const response = await fetch(
          '/.netlify/functions/spotifyRecentlySavedTracks'
        )
        if (response.ok) {
          const res = await response.json()
          const recentlySavedTracks = res.items.map(
            (item: RecentlyPlayedTracksItem) => {
              const artistsArray = item.track.artists.map((artist: Artist) => {
                return {
                  name: artist.name,
                  id: artist.id,
                  // @ts-ignore
                  uuid: this._vm.$uuid.v4(),
                  url: artist.external_urls.spotify
                }
              })
              return {
                name: item.track.name,
                id: item.track.id,
                // @ts-ignore
                uuid: this._vm.$uuid.v4(),
                url: item.track.external_urls.spotify,
                img: item.track.album.images[1]
                  ? item.track.album.images[1].url
                  : state.spotifyIconGreen,
                artists: artistsArray,
                preview_url: item.track.preview_url,
                demo: {
                  id: item.track.id,
                  // @ts-ignore
                  uuid: this._vm.$uuid.v4(),
                  name: item.track.name,
                  file: new Audio(item.track.preview_url),
                  isPlaying: false
                }
              }
            }
          )
          commit('SET_RECENTLY_SAVED_TRACKS', recentlySavedTracks)
          commit('SET_RECENTLY_SAVED_TRACKS_LOADING', false)
        }
      }
      getRecentlySavedTracks()
    } catch (error) {
      commit('SET_ERROR', error)
      commit('SET_RECENTLY_SAVED_TRACKS_LOADING', false)
    }
  }
}
