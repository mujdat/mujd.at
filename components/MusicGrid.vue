<template>
  <div v-if="items">
    <div>
      <h2 class="title">
        {{ title }}
      </h2>
      <ul
        role="list"
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-6"
      >
        <li
          v-for="item in items"
          :key="item.uuid"
          class="relative flex flex-col"
          :class="playlists ? 'justify-start' : 'justify-between'"
        >
          <a :href="item.url" :title="item.name">
            <div id="itemImageNameWrapper">
              <div
                id="itemImageWrapper"
                class="
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-primary-500
                  group
                  block
                  w-full
                  aspect-w-10 aspect-h-10
                  overflow-hidden
                "
              >
                <img
                  id="itemImage"
                  :src="item.img"
                  :alt="item.name"
                  class="object-cover rounded-md"
                />
              </div>
              <p
                id="itemName"
                class="
                  mt-2
                  block
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-gray-300
                "
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
              <a
                :href="artist.url"
                :title="artist.name"
                class="hover:underline"
                >{{ artist.name }}</a
              >
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
                class="
                  border
                  p-2
                  rounded-lg
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-[#1db954]
                  text-sm
                  mt-2
                "
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
                  {{ $t('pages.music.playButton') }}
                </span>
              </button>
            </div>
            <div
              v-else
              class="
                py-2
                mt-2
                text-sm
                pointer-events-none
                text-gray-400
                dark:text-gray-500
              "
            >
              Preview not available
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MusicGrid',
  props: {
    // TODO: Add Types
    items: {
      type: Array as any,
      default: () => null
    },
    playlists: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'A Default Title'
    },
    loading: {
      type: Boolean,
      default: false
    },
    previewItem: {
      type: Object,
      default: () => null
    }
  }
})
</script>

<style>
#itemImageNameWrapper:hover #itemName {
  text-decoration: underline;
}
</style>
