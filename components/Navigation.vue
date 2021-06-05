<template>
  <div class="relative bg-transparent z-50">
    <div class="mx-auto">
      <div
        class="
          flex
          justify-between
          items-center
          border-b-2 border-gray-100
          dark:border-gray-800
          py-6
          sm:space-x-10
          px-2
          sm:px-0
        "
      >
        <avatar resolution="desktop"></avatar>
        <div class="sm:hidden flex items-center">
          <theme-toggler
            class="mr-10"
            :is-toggled-on="isToggledOn"
            @toggle="toggleTheme"
          ></theme-toggler>
          <button
            type="button"
            class="
              bg-gray-100
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500
              hover:bg-gray-200
              dark:bg-gray-600
              dark:hover:bg-gray-700
              dark:text-gray-300
              dark:hover:text-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
            "
            aria-expanded="false"
            @click="mobileMenu = true"
          >
            <span class="sr-only">Open menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav class="hidden sm:flex space-x-10">
          <nuxt-link
            v-for="item in menuItems"
            :key="item.name"
            :to="item.to"
            class="
              transition
              duration-300
              text-base
              font-medium
              text-gray-900
              dark:text-gray-300
              hover:text-primary-900
              hover:border-primary-900
              dark:hover:text-primary-400
              dark:hover:border-primary-400
              border-b-2 border-transparent
            "
          >
            {{ item.name }}
          </nuxt-link>
          <theme-toggler
            class="-mt-1"
            :is-toggled-on="isToggledOn"
            @toggle="toggleTheme"
          ></theme-toggler>
        </nav>
      </div>
    </div>
    <transition
      appear
      enter-active-class="duration-200 ease-out"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="mobileMenu"
        class="
          absolute
          top-3.5
          inset-x-0
          pt-2
          transition
          transform
          origin-top-right
          sm:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-none
            bg-white
            dark:bg-gray-800
            ring-1 ring-black ring-opacity-10
            dark:ring-opacity-20
            divide-y-2 divide-gray-50
          "
        >
          <div class="pb-8 pt-3 px-5">
            <div class="flex items-center justify-between">
              <avatar class="mt-2"></avatar>
              <button
                type="button"
                class="
                  bg-gray-100
                  dark:bg-gray-600
                  dark:hover:bg-gray-700
                  rounded-md
                  p-2
                  inline-flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-gray-500
                  hover:bg-gray-200
                  focus:outline-none
                  focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
                "
                @click="mobileMenu = false"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-8 px-3">
              <nav class="grid gap-y-8" @click="mobileMenu = false">
                <nuxt-link
                  v-for="item in menuItems"
                  :key="item.name"
                  :to="item.to"
                  class="
                    transition
                    duration-300
                    flex
                    items-center
                    -m-3
                    py-3
                    text-base
                    font-medium
                    text-gray-500
                    dark:text-gray-300
                    border-b-2 border-transparent
                    hover:text-primary-900
                    dark:hover:text-primary-400
                    hover:border-b-2 hover:border-primary-900
                    dark:hover:border-primary-400
                  "
                >
                  <outline-home-icon
                    v-if="item.name === 'Home'"
                    class="w-5 h-5"
                  />
                  <outline-user-icon
                    v-if="item.name === 'About'"
                    class="w-5 h-5"
                  />
                  <outline-music-note-icon
                    v-if="item.name === 'Music'"
                    class="w-5 h-5"
                  />
                  <outline-photograph-icon
                    v-if="item.name === 'Photos'"
                    class="w-5 h-5"
                  />
                  <span class="ml-3">
                    {{ item.name }}
                  </span>
                </nuxt-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Navigation',
  data() {
    return {
      mobileMenu: false,
      isToggledOn: false,
      menuItems: [
        {
          name: 'Home',
          to: '/',
        },
        {
          name: 'About',
          to: '/about',
        },
        {
          name: 'Music',
          to: '/music',
        },
        {
          name: 'Photos',
          to: '/photos',
        },
      ],
    }
  },
  computed: {
    systemColorPref() {
      if (this.$colorMode) {
        return this.$colorMode.value
      } else {
        return null
      }
    },
  },
  watch: {
    systemColorPref() {
      if (this.systemColorPref === 'dark') {
        this.isToggledOn = true
      } else {
        this.isToggledOn = false
      }
    },
  },
  created() {
    if (this.$colorMode) {
      this.$colorMode.preference = 'system'
    }
    if (
      this.systemColorPref === 'dark' &&
      this.$colorMode.preference === 'system'
    ) {
      this.isToggledOn = true
    } else {
      this.isToggledOn = false
    }
  },
  methods: {
    toggleTheme() {
      this.isToggledOn = !this.isToggledOn
      if (this.isToggledOn) {
        this.$colorMode.preference = 'dark'
      } else {
        this.$colorMode.preference = 'light'
      }
    },
  },
})
</script>
<style lang="postcss">
nav [aria-current]:not([aria-current='false']) {
  @apply border-b-2;
  @apply text-primary-900 dark:text-primary-400;
  @apply border-primary-900 dark:border-primary-400;
}
</style>
