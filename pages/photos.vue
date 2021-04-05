<template>
  <div>
    <intro-text title="Photos">
      <p>
        I don't take many photos and when I do it's usually with my iPhone but
        every now and then I have some good ones that I'd like to share. Here,
        you'll find some photos I was able to capture, my unsplash likes &amp;
        collections. The ones that I can't upload there, are usually on my
        <a
          class="text-gray-900 dark:text-gray-300 hover:underline"
          href="https://instagram.com/mujdat"
          >Instagram</a
        >.
      </p>
    </intro-text>

    <div class="space-y-16">
      <div>
        <h3
          class="text-2xl mb-6 tracking-tight font-extrabold text-gray-900 dark:text-gray-300"
        >
          My Photos
        </h3>
        <div v-if="photosLoading">
          <loading-indicator></loading-indicator>
        </div>
        <div v-else style="columns: 3 12.5rem; column-gap: 1.5rem">
          <div v-for="item in photos" :key="item.id" class="inline-block mb-5">
            <div class="flex flex-col space-y-1 text-sm">
              <div class="mb-2">
                <a :href="item.link" target="_blank"
                  ><img
                    class="transition duration-300 hover:opacity-75"
                    :src="item.src"
                    :alt="item.alt"
                /></a>
              </div>
              <p
                class="text-gray-700 dark:text-gray-500"
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
                class="text-gray-700 dark:text-gray-500 font-medium text-sm flex flex-row items-center"
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
        <h3
          class="text-2xl mb-6 tracking-tight font-extrabold text-gray-900 dark:text-gray-300"
        >
          Likes
        </h3>
        <div v-if="likesLoading">
          <loading-indicator></loading-indicator>
        </div>
        <div v-else style="columns: 3 12.5rem; column-gap: 1.5rem">
          <div v-for="item in likes" :key="item.id" class="inline-block mb-5">
            <div class="flex flex-col space-y-1 text-sm">
              <div class="mb-2">
                <a :href="item.link" target="_blank"
                  ><img
                    class="transition duration-300 hover:opacity-75"
                    :src="item.src"
                    :alt="item.alt"
                /></a>
              </div>
              <p
                class="text-gray-700 dark:text-gray-500"
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
                <a
                  :href="item.user.link"
                  target="_blank"
                  class="hover:underline"
                  ><span>{{ item.user.name }}</span></a
                >
              </p>
              <p
                class="text-gray-700 dark:text-gray-500 font-medium text-sm flex flex-row items-center"
              >
                <outline-heart-icon class="h-4 w-4 mr-1 0"></outline-heart-icon>
                {{ item.likes ? item.likes : 0 }}
              </p>
            </div>
          </div>
        </div>
        <div v-if="!likesLoading" class="mx-auto text-center">
          <a href="https://unsplash.com/@_mujdat/likes" target="_blank">
            <custom-button>See all likes</custom-button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'PhotosPage',
  head: {
    title:
      'Müjdat Korkmaz | Photos | Front-End Developer based in Dresden, Germany',
  },
  computed: {
    photos() {
      return this.$store.state.photos.photos
    },
    likes() {
      return this.$store.state.photos.likes
    },
    photosLoading() {
      return this.$store.state.photos.photosLoading
    },
    likesLoading() {
      return this.$store.state.photos.likesLoading
    },
  },
  mounted() {
    this.$store.dispatch('photos/getPhotos')
    this.$store.dispatch('photos/getLikes')
  },
})
</script>
