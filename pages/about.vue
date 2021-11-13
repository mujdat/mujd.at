<template>
  <div>
    <div>
      <h2
        class="
          text-3xl
          mb-6
          tracking-light
          font-extrabold
          text-gray-900
          dark:text-gray-300
        "
      >
        About
      </h2>
      <div class="prose dark:prose-dark">
        <h2>Hello there! 👋🏻</h2>
        <p>
          My name is Müjdat Korkmaz, I'm a Front-End Developer and I currently
          work at <a href="https://phmu.de/"><strong>PHMU</strong></a> as well
          as a freelancer on the side, based in Dresden, Germany.
        </p>
        <p>
          I started my journey as a developer with WordPress and it's still one
          of the main technologies I use to create websites and web
          applications. Besides WordPress and the fundamentals like HTML, CSS
          &amp; JavaScript, I use technologies like TypeScript, Vue.js, Nuxt.js,
          TailwindCSS, SASS and GraphQL / REST every day. I'm experienced in
          building dynamic, flexible, interactive and modern websites and web
          applications.
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, useStore, useMeta } from '@nuxtjs/composition-api'

import { RootState } from '@/store'

export default defineComponent({
  name: 'AboutPage',
  setup() {
    const store = useStore<RootState>()
    useMeta({ title: store.state.meta.about.title })
    return {}
  },
  head: {}
})
</script>
