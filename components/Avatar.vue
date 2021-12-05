<template>
  <div
    v-if="resolution === 'desktop'"
    class="flex justify-start lg:w-0 lg:flex-1"
  >
    <picture>
      <source
        srcset="/memoji.webp"
        type="image/webp"
        class="h-16 w-16 rounded-full"
      />
      <img
        src="/memoji.jpg"
        alt="Müjdat Korkmaz"
        class="h-16 w-16 rounded-full"
      />
    </picture>
  </div>
  <div v-else>
    <nuxt-link to="/">
      <picture>
        <source
          srcset="/memoji.webp"
          type="image/webp"
          class="h-16 w-16 rounded-full"
        />
        <img
          src="/avatar.jpg"
          alt="Müjdat Korkmaz"
          class="h-16 w-16 rounded-full"
        />
      </picture>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'Avatar',
  props: {
    resolution: {
      type: String,
      default: 'desktop'
    }
  }
})
</script>
