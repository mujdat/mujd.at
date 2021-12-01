<template>
  <div v-if="isMobile">
    <div class="mt-8 px-3">
      <nav class="flex flex-col space-y-4" @click="$emit('close')">
        <nuxt-link
          :to="localePath($t('menuItems.home.to'))"
          class="menu-item-mobile"
        >
          <outline-home-icon class="w-5 h-5 mr-2.5" />{{
            $t('menuItems.home.name')
          }}
        </nuxt-link>
        <nuxt-link
          :to="localePath($t('menuItems.about.to'))"
          class="menu-item-mobile"
        >
          <outline-user-icon class="w-5 h-5 mr-2.5" />{{
            $t('menuItems.about.name')
          }}
        </nuxt-link>
        <nuxt-link :to="$t('menuItems.music.to')" class="menu-item-mobile">
          <outline-music-note-icon class="w-5 h-5 mr-2.5" />
          {{ $t('menuItems.music.name') }}
        </nuxt-link>
        <nuxt-link :to="$t('menuItems.photos.to')" class="menu-item-mobile">
          <outline-photograph-icon class="w-5 h-5 mr-2.5" />{{
            $t('menuItems.photos.name')
          }}
        </nuxt-link>
        <nuxt-link :to="$t('menuItems.contact.to')" class="menu-item-mobile">
          <outline-mail-icon class="w-5 h-5 mr-2.5" />
          {{ $t('menuItems.contact.name') }}
        </nuxt-link>
      </nav>
    </div>
  </div>
  <div v-else class="flex space-x-4">
    <nuxt-link :to="$t('menuItems.home.to')" class="menu-item-desktop">
      {{ $t('menuItems.home.name') }}
    </nuxt-link>
    <nuxt-link :to="$t('menuItems.about.to')" class="menu-item-desktop">
      {{ $t('menuItems.about.name') }}
    </nuxt-link>
    <nuxt-link :to="$t('menuItems.music.to')" class="menu-item-desktop">
      {{ $t('menuItems.music.name') }}
    </nuxt-link>
    <nuxt-link :to="$t('menuItems.photos.to')" class="menu-item-desktop">
      {{ $t('menuItems.photos.name') }}
    </nuxt-link>
    <nuxt-link :to="$t('menuItems.contact.to')" class="menu-item-desktop">
      {{ $t('menuItems.contact.name') }}
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'NavigationItems',
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return {}
  }
})
</script>
<style lang="postcss">
.menu-item-desktop {
  @apply transition duration-300 text-base font-medium text-gray-900 dark:text-gray-300 hover:text-primary-900 hover:border-primary-900 dark:hover:text-primary-400 dark:hover:border-primary-400 border-b-2 border-transparent;
}
.menu-item-mobile {
  @apply transition duration-300 flex items-center -m-3 py-3 text-base font-medium text-gray-500 dark:text-gray-300 border-b-2 border-transparent hover:text-primary-900 dark:hover:text-primary-400 hover:border-b-2 hover:border-primary-900 dark:hover:border-primary-400;
}
</style>
