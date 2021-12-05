<template>
  <div class="w-full">
    <div
      class="
        flex flex-row
        items-center
        justify-between
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
      <nuxt-link
        class="
          transition
          duration-300
          hover:text-primary-900
          dark:hover:text-primary-400
        "
        :to="$t('menuItems.imprint.to')"
      >
        {{ $t('menuItems.imprint.name') }}
      </nuxt-link>

      <a href="#" title="Scroll to top">
        <outline-chevron-up-icon class="h-8 w-8"></outline-chevron-up-icon>
      </a>
    </div>
    <cookie-control :locale="locale" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext, computed } from '@nuxtjs/composition-api'

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
    const ctx = useContext()
    const locale = computed(() => ctx.i18n.getLocaleCookie())
    return { menuItems, locale }
  }
})
</script>
<style lang="postcss">
.cookieControl__BarContainer {
  @apply prose max-w-none bg-gray-200 dark:bg-[#111];
}
.cookieControl__BarContainer h3,
.cookieControl__BarContainer p {
  @apply text-[#111] dark:text-gray-200;
}
</style>
