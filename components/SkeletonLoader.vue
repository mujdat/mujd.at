<template>
  <div class="w-full h-auto mx-auto">
    <div
      class="
        flex
        animate-pulse
        flex-row
        items-center
        h-auto
        justify-center
        space-x-5
      "
    >
      <div class="flex flex-col space-y-4 w-full">
        <div class="w-24 bg-gray-400 h-4 rounded-md"></div>
        <div class="w-32 bg-gray-400 h-4 rounded-md"></div>
        <div class="w-24 bg-gray-400 h-4 rounded-md"></div>
        <div class="w-44 bg-gray-400 h-4 rounded-md"></div>
        <div></div>
        <div class="w-2/3 bg-gray-400 h-4 rounded-md"></div>
        <div class="w-full bg-gray-400 h-4 rounded-md"></div>
        <div class="w-full bg-gray-400 h-4 rounded-md"></div>
        <div></div>
        <div class="w-2/3 bg-gray-400 h-4 rounded-md"></div>
        <div class="w-1/3 bg-gray-400 h-4 rounded-md"></div>
        <div class="w-1/2 bg-gray-400 h-4 rounded-md"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'SkeletonLoader'
})
</script>
