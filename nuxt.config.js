export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // SSR Property: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-ssr/
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'Müjdat Korkmaz | Home | Front-End Developer based in Dresden, Germany.',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      // Global Meta Attrs
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Hello! My name is Müjdat Korkmaz and I'm a Front-End Developer based in Dresden, Germany.`,
      },

      // Twitter Card
      { name: 'twitter:site', content: '@mujdatkorkmaz' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://mujd.at',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content:
          'Müjdat Korkmaz | Home | Front-End Developer based in Dresden, Germany.',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: `Hello! My name is Müjdat Korkmaz and I'm a Front-End Developer based in Dresden, Germany.`,
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://mujd.at/twitter-card.png',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Nuxt Color Mode: https://color-mode.nuxtjs.org/
  colorMode: {
    classSuffix: '',
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-uuid.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://color-mode.nuxtjs.org/
    '@nuxtjs/color-mode',
    // https://www.npmjs.com/package/@nuxt-hero-icons/outline
    '@nuxt-hero-icons/outline/nuxt',
    // https://www.npmjs.com/package/@nuxt-hero-icons/solid
    '@nuxt-hero-icons/solid/nuxt',
    // https://vite.nuxtjs.org/
    // 'nuxt-vite',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
