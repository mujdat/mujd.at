<template>
  <button
    type="button"
    class="bg-gray-100 dark:bg-gray-600 relative p-1 inline-flex flex-shrink-0 h-8 w-14 border-2 border-gray-300 dark:border-gray-500 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
    aria-pressed="false"
    @click="$emit('toggle', isToggledOn)"
  >
    <span class="sr-only">Use setting</span>
    <span
      class="pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
      :class="isToggledOn ? 'translate-x-6' : 'translate-x-0'"
    >
      <span
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        :class="
          isToggledOn
            ? 'opacity-0 ease-out duration-100'
            : 'opacity-100 ease-in duration-200'
        "
        aria-hidden="true"
      >
        <outline-light-bulb-icon class="bg-transparent h-4 w-4 text-gray-500" />
      </span>
      <span
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
        :class="
          isToggledOn
            ? 'opacity-100 ease-in duration-200'
            : 'opacity-0 ease-out duration-100'
        "
        aria-hidden="true"
      >
        <outline-moon-icon class="bg-transparent h-4 w-4 text-gray-500" />
      </span>
    </span>
  </button>
</template>

<script>
export default {
  name: 'ThemeToggler',
  props: {
    isToggledOn: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
