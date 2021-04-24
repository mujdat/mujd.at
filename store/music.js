export const state = () => ({
  playlists: null,
  recentlyPlayedTracks: null,
  recentlySavedTracks: null,
  playlistsLoading: false,
  recentlyPlayedTracksLoading: false,
  recentlySavedTracksLoading: false,
  spotifyIconGreen: '/Spotify_Icon_CMYK_Green.png',
  spotifyIconBlack: '/Spotify_Icon_CMYK_Black.png',
  spotifyIconWhite: '/Spotify_Icon_CMYK_White.png',
  error: null,
})

export const mutations = {
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
  },
}

export const actions = {
  getPlaylists({ commit, state }) {
    commit('SET_PLAYLISTS_LOADING', true)
    try {
      const getPlaylists = async () => {
        const response = await fetch('/.netlify/functions/spotifyPlaylists')
        if (response.ok) {
          const res = await response.json()
          const playlists = res.items.map((item) => {
            return {
              id: item.id,
              name: item.name,
              description: item.description,
              img: item.images[1] ? item.images[1].url : state.spotifyIconGreen,
              url: item.external_urls.spotify,
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
          const recentlyPlayedTracks = res.items.map((item) => {
            const artistsArray = item.track.artists.map((artist) => {
              return {
                name: artist.name,
                id: artist.id,
                uuid: this._vm.$uuid.v4(),
                url: artist.external_urls.spotify,
              }
            })
            return {
              name: item.track.name,
              id: item.track.id,
              uuid: this._vm.$uuid.v4(),
              url: item.track.external_urls.spotify,
              img: item.track.album.images[1]
                ? item.track.album.images[1].url
                : state.spotifyIconGreen,
              artists: artistsArray,
              preview_url: item.track.preview_url,
              demo: {
                id: item.track.id,
                uuid: this._vm.$uuid.v4(),
                name: item.track.name,
                file: new Audio(item.track.preview_url),
                isPlaying: false,
              },
            }
          })
          const uniqueTracks = [
            ...new Map(
              recentlyPlayedTracks.map((item) => [item.id, item])
            ).values(),
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
          const recentlySavedTracks = res.items.map((item) => {
            const artistsArray = item.track.artists.map((artist) => {
              return {
                name: artist.name,
                id: artist.id,
                uuid: this._vm.$uuid.v4(),
                url: artist.external_urls.spotify,
              }
            })
            return {
              name: item.track.name,
              id: item.track.id,
              uuid: this._vm.$uuid.v4(),
              url: item.track.external_urls.spotify,
              img: item.track.album.images[1]
                ? item.track.album.images[1].url
                : state.spotifyIconGreen,
              artists: artistsArray,
              preview_url: item.track.preview_url,
              demo: {
                id: item.track.id,
                uuid: this._vm.$uuid.v4(),
                name: item.track.name,
                file: new Audio(item.track.preview_url),
                isPlaying: false,
              },
            }
          })
          commit('SET_RECENTLY_SAVED_TRACKS', recentlySavedTracks)
          commit('SET_RECENTLY_SAVED_TRACKS_LOADING', false)
        }
      }
      getRecentlySavedTracks()
    } catch (error) {
      commit('SET_ERROR', error)
      commit('SET_RECENTLY_SAVED_TRACKS_LOADING', false)
    }
  },
}
