<template>
  <div class="w-full">
    <div
      class="
        flex flex-row
        items-center
        justify-end
        text-gray-900
        dark:text-gray-300
        space-x-2
        py-6
        text-xs
        font-medium
        uppercase
        border-t border-gray-100
        dark:border-gray-800
        w-full
      "
    >
      <nuxt-link
        to="/imprint"
        class="
          w-auto
          transition
          duration-300
          hover:text-primary-900
          dark:hover:text-primary-400
        "
        >Imprint</nuxt-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'TheFooter',
})
</script>
