<template>
  <div>
    <div v-if="page && page.length">
      <h2 class="title">
        {{ page[0].data.title ? page[0].data.title[0].text : '' }}
      </h2>
      <prismic-rich-text
        class="prose-sm md:prose md:max-w-none dark:prose-dark"
        :field="page[0].data.content"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useMeta, useStore } from '@nuxtjs/composition-api'
import { usePrismicAPI } from 'nuxt-use-prismic-api'
import { RootState } from '@/store'

export default defineComponent({
  name: 'ImprintPage',
  setup() {
    const store = useStore<RootState>()
    useMeta({ title: store.state.meta.imprint.title })
    const { page } = usePrismicAPI({
      data: 'page',
      method: 'getByUID',
      docType: 'page',
      uid: 'imprint'
    })
    return { page }
  },
  head: {}
})
</script>
