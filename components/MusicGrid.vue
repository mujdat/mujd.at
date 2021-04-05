<template>
  <div>
    <h3
      class="text-2xl mb-6 tracking-tight font-extrabold text-gray-900 dark:text-gray-300"
    >
      {{ title }}
    </h3>
    <div v-if="loading">
      <loading-indicator></loading-indicator>
    </div>
    <div v-else>
      <ul
        role="list"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-6"
      >
        <li
          v-for="item in items"
          :key="item.uuid"
          class="relative flex flex-col justify-between"
        >
          <a :href="item.url" target="_blank">
            <div id="itemImageNameWrapper">
              <div
                id="itemImageWrapper"
                class="focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 group block w-full aspect-w-10 aspect-h-10 overflow-hidden"
              >
                <img
                  id="itemImage"
                  :src="item.img"
                  :alt="item.name"
                  class="object-cover"
                />
              </div>
              <p
                id="itemName"
                class="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {{ item.name }}
              </p>
            </div>
          </a>
          <p
            v-if="playlists"
            class="block text-sm font-medium text-gray-700 dark:text-gray-400"
          >
            {{ item.description }}
          </p>
          <div
            v-if="!playlists"
            class="block text-sm font-medium text-gray-700 dark:text-gray-400"
          >
            <span v-for="(artist, index) in item.artists" :key="artist.uuid">
              <a :href="artist.url" target="_blank" class="hover:underline">{{
                artist.name
              }}</a>
              <span
                v-if="
                  item.artists.length > 1 && index !== item.artists.length - 1
                "
                class="mx-1"
                >&middot;</span
              >
            </span>
          </div>
          <div v-if="!playlists">
            <div v-if="item.preview_url !== null">
              <button
                class="border p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1db954] text-sm mt-2"
                :class="
                  previewItem &&
                  previewItem.isPlaying &&
                  previewItem.id === item.id
                    ? 'bg-[#1db954] border-[#1db954] text-white'
                    : 'text-gray-700 border-gray-700 dark:text-gray-400 dark:border-gray-400'
                "
                @click.prevent="
                  previewItem &&
                  previewItem.isPlaying &&
                  previewItem.id === item.id
                    ? $emit('pause', item.demo)
                    : $emit('play', item.demo)
                "
              >
                <span class="flex flex-row items-center">
                  <solid-play-icon
                    v-show="
                      previewItem === null ||
                      (previewItem && previewItem.id !== item.id)
                    "
                    class="w-5 h-5 mr-1"
                  />
                  <solid-pause-icon
                    v-show="
                      previewItem &&
                      previewItem.isPlaying &&
                      previewItem.id === item.id
                    "
                    class="w-5 h-5 mr-1"
                  />
                  Preview
                </span>
              </button>
            </div>
            <div
              v-else
              class="py-2 mt-2 text-sm pointer-events-none text-gray-400 dark:text-gray-500"
            >
              Preview not available
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicGrid',
  props: {
    items: {
      type: Array,
      default: () => null,
    },
    playlists: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'A Default Title',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    previewItem: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style>
#itemImageNameWrapper:hover #itemName {
  text-decoration: underline;
}
</style>
