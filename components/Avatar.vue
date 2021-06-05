<template>
  <div
    v-if="resolution === 'desktop'"
    class="flex justify-start lg:w-0 lg:flex-1"
  >
    <nuxt-link to="/">
      <img
        class="h-12 w-12 rounded-full"
        src="~/assets/img/avatar.jpg"
        alt="Avatar"
      />
    </nuxt-link>
  </div>
  <div v-else>
    <nuxt-link to="/">
      <img
        class="h-12 w-12 rounded-full"
        src="~/assets/img/avatar.jpg"
        alt="Avatar"
      />
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
      default: 'desktop',
    },
  },
})
</script>
