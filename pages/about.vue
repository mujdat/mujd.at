<template>
  <div>
    <h2 class="title">About</h2>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
      <picture class="flex-shrink-0 mx-auto">
        <source
          srcset="/about.webp"
          type="image/webp"
          class="rounded-md w-full"
        />
        <img src="/about.jpg" alt="Müjdat Korkmaz" class="rounded-md w-full" />
      </picture>
      <div class="prose-sm md:prose md:max-w-none dark:prose-dark">
        <p>
          My name is Müjdat Korkmaz, I'm a Front-End Developer and I currently
          work at
          <a href="https://phmu.de/" title="PHMU"><strong>PHMU</strong></a>
          as well as a freelancer on the side, based in Dresden, Germany.
        </p>
        <p>
          I started my journey as a developer with WordPress and it's still one
          of the main technologies I use to create websites and web
          applications. Besides WordPress and the fundamentals like HTML, CSS
          &amp; JavaScript, I use technologies like TypeScript, Vue.js, Nuxt.js,
          TailwindCSS, SASS and GraphQL / REST APIs every day.
        </p>
        <p>
          I'm experienced in building dynamic, flexible, interactive and modern
          websites and web applications.
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
