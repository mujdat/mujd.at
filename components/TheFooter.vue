<template>
  <div class="w-full">
    <div
      class="
        relative
        flex flex-row
        items-center
        justify-between
        w-full
        py-6
        text-xs
        font-medium
        text-gray-900
        uppercase
        border-t border-gray-100
        dark:text-gray-300 dark:border-gray-800
      "
    >
      <div class="flex space-x-2.5">
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
        <span>&middot;</span>
        <span
          class="
            transition
            duration-300
            cursor-pointer
            hover:text-primary-900
            dark:hover:text-primary-400
          "
          :class="
            $i18n.locale && $i18n.locale === 'de'
              ? 'text-primary-900 border-b-2 dark:text-primary-400 border-primary-900 dark:border-primary-400'
              : ''
          "
          @click="$i18n.setLocale('de')"
        >
          DE
        </span>
        <span>&middot;</span>
        <span
          class="
            transition
            duration-300
            cursor-pointer
            hover:text-primary-900
            dark:hover:text-primary-400
          "
          :class="
            $i18n.locale && $i18n.locale === 'en'
              ? 'text-primary-900 border-b-2 dark:text-primary-400 border-primary-900 dark:border-primary-400'
              : ''
          "
          @click="$i18n.setLocale('en')"
        >
          EN
        </span>
      </div>

      <a href="#" title="Scroll to top">
        <outline-chevron-up-icon class="w-8 h-8"></outline-chevron-up-icon>
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
    const ctx = useContext()
    const locale = computed(() => ctx.i18n.getLocaleCookie())
    return { locale }
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
  @apply px-3.5 py-2 text-sm transition duration-300 inline-flex items-center justify-center border border-transparent font-bold rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500;
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
