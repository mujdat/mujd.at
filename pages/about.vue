<template>
  <div>
    <h2 class="title">{{ $t('pages.about.title') }}</h2>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
      <div class="flex flex-col items-center">
        <picture class="flex-shrink-0 mx-auto">
          <source
            srcset="/about.webp"
            type="image/webp"
            class="rounded-md w-full"
          />
          <img
            src="/about.jpg"
            alt="Müjdat Korkmaz"
            class="rounded-md w-full"
          />
        </picture>
        <div class="flex space-x-4">
          <a href="https://github.com/mujdat">
            <btn class="mt-8">
              <outline-terminal-icon
                class="w-4 h-4 mr-2"
              ></outline-terminal-icon>
              <span>GitHub</span>
            </btn>
          </a>
          <a href="https://twitter.com/mujdatkorkmaz">
            <btn class="mt-8">
              <outline-chat-icon class="w-4 h-4 mr-2"></outline-chat-icon>
              <span>Twitter</span>
            </btn>
          </a>
          <nuxt-link to="contact">
            <btn class="mt-8"
              ><span>Contact</span>
              <outline-external-link-icon
                class="w-4 h-4 ml-2"
              ></outline-external-link-icon>
            </btn>
          </nuxt-link>
        </div>
      </div>
      <div
        class="prose-sm md:prose md:max-w-none dark:prose-dark"
        v-html="$sanitize($t('pages.about.text'))"
      ></div>
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
