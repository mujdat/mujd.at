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
    <div class="space-y-16 mt-16">
      <div>
        <div v-if="photosLoading">
          <loading-indicator></loading-indicator>
        </div>
        <div v-else style="columns: 3 12.5rem; column-gap: 1.5rem">
          <h3
            class="
              text-2xl
              mb-6
              tracking-tight
              font-extrabold
              text-gray-900
              dark:text-gray-300
            "
          >
            My Photos
          </h3>
          <div v-for="item in photos" :key="item.id" class="inline-block mb-5">
            <div class="flex flex-col space-y-1 text-sm">
              <div class="mb-2">
                <a :href="item.link"
                  ><img
                    class="transition duration-300 hover:opacity-75"
                    :src="item.src"
                    :alt="item.alt"
                /></a>
              </div>
              <p
                class="text-gray-700 dark:text-gray-400"
                :class="
                  item.description && item.description.length ? '' : 'italic'
                "
              >
                {{
                  item.description
                    ? item.description
                    : 'Description not available'
                }}
              </p>
              <p
                class="
                  text-gray-700
                  dark:text-gray-400
                  font-medium
                  text-sm
                  flex flex-row
                  items-center
                "
              >
                <span class="flex flex-row items-center mr-4">
                  <outline-heart-icon class="h-4 w-4 mr-1"></outline-heart-icon>
                  {{ item.likes ? item.likes : 0 }}
                </span>
                <span class="flex flex-row items-center">
                  <outline-eye-icon class="h-4 w-4 mr-1"></outline-eye-icon>
                  {{ item.views ? item.views : 0 }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div v-if="likesLoading">
          <loading-indicator></loading-indicator>
        </div>
        <div v-else style="columns: 3 12.5rem; column-gap: 1.5rem">
          <h3
            class="
              text-2xl
              mb-6
              tracking-tight
              font-extrabold
              text-gray-900
              dark:text-gray-300
            "
          >
            Likes
          </h3>
          <div v-for="item in likes" :key="item.id" class="inline-block mb-5">
            <div class="flex flex-col space-y-1 text-sm">
              <div class="mb-2">
                <a :href="item.link"
                  ><img
                    class="transition duration-300 hover:opacity-75"
                    :src="item.src"
                    :alt="item.alt"
                /></a>
              </div>
              <p
                class="text-gray-700 dark:text-gray-400"
                :class="
                  item.description && item.description.length ? '' : 'italic'
                "
              >
                {{
                  item.description
                    ? item.description
                    : 'Description not available'
                }}
              </p>
              <p class="text-gray-900 dark:text-gray-300">
                by
                <a :href="item.user.link" class="hover:underline"
                  ><span>{{ item.user.name }}</span></a
                >
              </p>
              <p
                class="
                  text-gray-700
                  dark:text-gray-400
                  font-medium
                  text-sm
                  flex flex-row
                  items-center
                "
              >
                <outline-heart-icon class="h-4 w-4 mr-1 0"></outline-heart-icon>
                {{ item.likes ? item.likes : 0 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  useStore,
  useMeta,
  computed
} from '@nuxtjs/composition-api'
import { usePrismicAPI } from 'nuxt-use-prismic-api'
import { RootState } from 'store'

export default defineComponent({
  name: 'PhotosPage',
  setup() {
    const store = useStore<RootState>()
    useMeta({ title: store.state.meta.photos.title })
    store.dispatch('photos/getPhotos')
    store.dispatch('photos/getLikes')

    // TODO: Add Types
    const photos: any = computed(() => {
      return store.state.photos.photos
    })

    // TODO: Add Types
    const likes: any = computed(() => {
      return store.state.photos.likes
    })
    const photosLoading = computed(() => {
      return store.state.photos.photosLoading
    })
    const likesLoading = computed(() => {
      return store.state.photos.likesLoading
    })

    const { page, pageLoading } = usePrismicAPI({
      data: 'page',
      method: 'getByUID',
      docType: 'page',
      uid: 'photos'
    })

    return {
      page,
      pageLoading,
      photos,
      likes,
      photosLoading,
      likesLoading
    }
  },
  head: {}
})
</script>
