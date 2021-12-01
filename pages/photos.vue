<template>
  <div>
    <div>
      <div>
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
          {{ $t('pages.photos.title') }}
        </h2>
        <div
          class="prose-sm md:prose md:max-w-none dark:prose-dark"
          v-html="$sanitize($t('pages.music.text'))"
        ></div>
      </div>
    </div>
    <div v-if="photos && likes" class="space-y-16 mt-16">
      <div>
        <div>
          <h2 class="title">{{ $t('pages.photos.myPhotos') }}</h2>
          <div style="columns: 3 12.5rem; column-gap: 1.5rem">
            <div
              v-for="item in photos"
              :key="item.id"
              class="inline-block mb-5"
            >
              <div class="flex flex-col space-y-1 text-sm">
                <div class="mb-2">
                  <a :href="item.link" :title="item.alt"
                    ><img
                      class="
                        transition
                        duration-300
                        hover:opacity-75
                        rounded-md
                      "
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
                  {{ item.description ? item.description : '' }}
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
                    <outline-heart-icon
                      class="h-4 w-4 mr-1"
                    ></outline-heart-icon>
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
      </div>
      <div>
        <div>
          <h2 class="title">{{ $t('pages.photos.likes') }}</h2>
          <div style="columns: 3 12.5rem; column-gap: 1.5rem">
            <div v-for="item in likes" :key="item.id" class="inline-block mb-5">
              <div class="flex flex-col space-y-1 text-sm">
                <div class="mb-2">
                  <a :href="item.link" :title="item.alt"
                    ><img
                      class="
                        transition
                        duration-300
                        hover:opacity-75
                        rounded-md
                      "
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
                  {{ item.description ? item.description : '' }}
                </p>
                <p class="text-gray-900 dark:text-gray-300">
                  by
                  <a
                    :href="item.user.link"
                    :title="item.user.name"
                    class="hover:underline"
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
                  <outline-heart-icon
                    class="h-4 w-4 mr-1 0"
                  ></outline-heart-icon>
                  {{ item.likes ? item.likes : 0 }}
                </p>
              </div>
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

    return {
      photos,
      likes,
      photosLoading,
      likesLoading
    }
  },
  head: {}
})
</script>
