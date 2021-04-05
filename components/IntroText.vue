<template>
  <div
    class="mb-16 text-xl text-gray-700 dark:text-gray-400 space-y-6 font-normal leading-relaxed"
  >
    <h2
      class="text-3xl mb-6 tracking-light font-extrabold text-gray-900 dark:text-gray-300"
    >
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'IntroText',
  props: {
    title: {
      type: String,
      default: 'A Default Title',
    },
  },
}
</script>
