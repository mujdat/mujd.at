export const state = () => ({
  photos: null,
  likes: null,
  photosLoading: false,
  likesLoading: false,
  error: null,
})

export const mutations = {
  SET_PHOTOS_LOADING(state, flag) {
    state.photosLoading = flag
  },
  SET_LIKES_LOADING(state, flag) {
    state.likesLoading = flag
  },
  SET_PHOTOS(state, photos) {
    state.photos = photos
  },
  SET_LIKES(state, likes) {
    state.likes = likes
  },
  SET_ERROR(state, error) {
    state.error = error
  },
}

export const actions = {
  getPhotos({ commit }) {
    commit('SET_PHOTOS_LOADING', true)
    try {
      const getPhotos = async () => {
        const response = await fetch('/.netlify/functions/unsplashPhotos')
        if (response.ok) {
          const res = await response.json()
          const photos = res.map((item) => {
            return {
              id: item.id,
              link: item.links.html,
              src: item.urls.regular,
              likes: item.likes,
              description: item.description,
              alt: item.alt_description,
              views: item.statistics.views.total,
            }
          })
          commit('SET_PHOTOS', photos)
          commit('SET_PHOTOS_LOADING', false)
          console.log(res)
        }
      }
      getPhotos()
    } catch (error) {
      commit('SET_ERROR', error)
      commit('SET_PHOTOS_LOADING', false)
    }
  },
  getLikes({ commit }) {
    try {
      commit('SET_LIKES_LOADING', true)
      const getLikes = async () => {
        const response = await fetch('/.netlify/functions/unsplashLikes')
        if (response.ok) {
          const res = await response.json()
          const likes = res.map((item) => {
            return {
              id: item.id,
              link: item.links.html,
              src: item.urls.regular,
              likes: item.likes,
              description: item.description,
              alt: item.alt_description,
              user: { name: item.user.name, link: item.user.links.html },
            }
          })
          commit('SET_LIKES', likes)
          commit('SET_LIKES_LOADING', false)
        }
      }
      getLikes()
    } catch (error) {
      commit('SET_ERROR', error)
      commit('SET_LIKES_LOADING', false)
    }
  },
}
