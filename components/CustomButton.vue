<template>
  <button
    class="transition duration-300 inline-flex items-center border border-transparent font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    :class="{
      'px-3.5 py-2 text-sm': size === 'sm',
      'px-4 py-2 text-sm': size === 'md',
      'px-5 py-2 text-base': size === 'lg',
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    size: {
      type: String,
      default: 'md',
    },
  },
}
</script>
