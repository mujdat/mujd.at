<template>
  <div class="max-w-5xl mx-auto px-6 flex flex-col h-screen justify-between">
    <div>
      <navigation></navigation>
      <div class="my-16">
        <Nuxt />
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout',
}
</script>
