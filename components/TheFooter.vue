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
  @apply bg-gray-200 dark:bg-[#111];
}
.cookieControl__BarContainer,
.cookieControl__BarButtons button,
.cookieControl__ModalContent {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}
.cookieControl__ModalContent {
  @apply rounded-md dark:text-gray-200 dark:bg-[#111];
}

.cookieControl__BarButtons button,
.cookieControl__ModalButtons button,
button.cookieControl__ModalClose {
  @apply transition duration-300 inline-flex  items-center  border border-transparent font-bold rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500;
}
.cookieControl__BarContainer div {
  @apply prose dark:prose-dark;
}
.cookieControl__BarContainer h3,
.cookieControl__BarContainer p,
.cookieControl__ModalContent h3,
.cookieControl__ModalInputWrapper span,
.cookieControl__ModalContent ul > li {
  @apply text-gray-700 dark:text-gray-300 mr-0 md:mr-8;
}
</style>
