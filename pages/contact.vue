<template>
  <div>
    <div>
      <h2 class="title">{{ $t('pages.contact.title') }}</h2>
      <div
        class="prose-sm md:prose md:max-w-none dark:prose-dark"
        v-html="$sanitize($t('pages.contact.text'))"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta, useStore } from '@nuxtjs/composition-api'
import { RootState } from '@/store'

export default defineComponent({
  name: 'ContactPage',
  setup() {
    const store = useStore<RootState>()
    useMeta({ title: store.state.meta.contact.title })

    return {}
  },
  head: {}
})
</script>
