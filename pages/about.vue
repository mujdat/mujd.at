<template>
  <div>
    <intro-text title="About">
      <p>
        Hello there!<span class="mx-2">👋🏻</span> My name is Müjdat Korkmaz, I'm
        a {{ currentAge }} year a Front-End Developer and I currently work at
        <a
          class="
            text-[#f7a823]
            pb-1
            transition
            duration-300
            border-b-2 border-transparent
            hover:border-[#f7a823]
          "
          href="https://phmu.de"
        >
          PHMU</a
        >
        based in Dresden, Germany.
      </p>
      <p>
        I was born in Bulgaria, grew up in Turkey and I've been living in
        Germany since 2011. I was introduced to the world of web development
        back in high school and my first site was built with WordPress!
      </p>
      <p>
        For a long time I did web development as a hobby and it was a lot of
        fun! I then started to study Linguistics at TU Dresden but after a
        couple years into my studies I decided to drop out and pursue a career
        as a web developer. During my studies and the transitional period to
        becoming a developer I had worked in different fields such as
        communication, customer service and retail but finally in May 2020, I
        found my dream job as a Front-End Developer at PHMU!
      </p>
    </intro-text>
    <intro-text title="Contact">
      You can reach out to me via DM on
      <a
        class="
          text-[#1da1f2]
          pb-1
          transition
          duration-300
          border-b-2 border-transparent
          hover:border-[#1da1f2]
        "
        href="https://twitter.com/mujdatkorkmaz"
      >
        Twitter</a
      >, but if you want to talk to me about something more elaborate, you can
      send an email to
      <a
        class="
          text-gray-900
          dark:text-gray-300
          pb-1
          transition
          duration-300
          border-b-2 border-transparent
          hover:border-gray-900
          dark:hover:border-gray-300
        "
        href="mailto:me@mujd%2Eat"
        >me@mujd.at</a
      >
    </intro-text>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  useMeta,
  useStore,
  computed,
} from '@nuxtjs/composition-api'

import { RootState } from 'store'

export default defineComponent({
  name: 'AboutPage',
  setup() {
    const store = useStore<RootState>()
    useMeta({ title: store.state.meta.about.title })

    const currentAge = computed(() => {
      const currentYear = new Date().getFullYear()
      const birthYear = 1992
      return currentYear - birthYear
    })

    return {
      currentAge,
    }
  },
  head: {},
})
</script>
