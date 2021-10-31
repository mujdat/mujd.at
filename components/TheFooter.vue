<template>
  <div class="w-full">
    <div
      class="
        md:flex md:flex-row md:items-center md:justify-between
        text-gray-900
        dark:text-gray-300
        py-6
        text-xs
        font-medium
        uppercase
        border-t border-gray-100
        dark:border-gray-800
        w-full
        relative
      "
    >
      <div class="grid grid-cols-3 gap-y-4 md:flex md:space-x-2">
        <nuxt-link
          v-for="(item, i) in menuItems"
          :key="item.name"
          :to="item.to"
          class="
            md:flex md:flex-row
            w-auto
            transition
            duration-300
            hover:text-primary-900
            dark:hover:text-primary-400
          "
          >{{ item.name }}
          <span class="hidden md:flex md:ml-1 text-gray-500">{{
            i === menuItems.length - 1 ? '' : '&middot;'
          }}</span>
        </nuxt-link>
      </div>
      <div class="absolute right-1 top-8 md:relative md:right-0 md:top-0">
        <a href="#">
          <outline-chevron-up-icon class="h-8 w-8"></outline-chevron-up-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TheFooter',
  setup() {
    const menuItems = [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'About',
        to: '/about'
      },
      {
        name: 'Music',
        to: '/music'
      },
      {
        name: 'Photos',
        to: '/photos'
      },
      {
        name: 'Contact',
        to: '/contact'
      },
      {
        name: 'Imprint',
        to: '/imprint'
      }
    ]
    return { menuItems }
  }
})
</script>
