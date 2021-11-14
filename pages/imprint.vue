<template>
  <div>
    <loading-indicator v-if="pageLoading && pageLoading[0]"></loading-indicator>
    <div v-else-if="page && page.length">
      <h2
        class="
          text-3xl
          mb-6
          tracking-light
          font-extrabold
          text-gray-900
          dark:text-gray-300
        "
      >
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
    const { page, pageLoading } = usePrismicAPI({
      data: 'page',
      method: 'getByUID',
      docType: 'page',
      uid: 'imprint'
    })
    return { page, pageLoading }
  },
  head: {}
})
</script>
