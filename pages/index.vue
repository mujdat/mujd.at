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
        class="prose dark:prose-dark"
        :field="page[0].data.content"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { usePrismicAPI } from 'nuxt-use-prismic-api'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const { page, pageLoading } = usePrismicAPI({
      data: 'page',
      method: 'getByUID',
      docType: 'page',
      uid: 'home'
    })

    return { page, pageLoading }
  },
  head: {}
})
</script>
