<template>
  <div>
    <skeleton-loader v-if="!pages.length"></skeleton-loader>
    <div v-else>
      <div v-for="page in pages" :key="page.uid">
        <div
          v-if="
            $i18n.locale && $i18n.locale === 'de' && page.uid === 'impressum'
          "
        >
          <h2 v-if="$i18n && $i18n.locale === 'de'" class="title">
            {{ page.data.title ? page.data.title[0].text : '' }}
          </h2>
          <prismic-rich-text
            class="prose md:max-w-none dark:prose-dark"
            :field="page.data.content"
          />
        </div>
        <div
          v-else-if="$i18n && $i18n.locale === 'en' && page.uid === 'imprint'"
        >
          <h2 class="title">
            {{ page.data.title ? page.data.title[0].text : '' }}
          </h2>
          <prismic-rich-text
            class="prose md:max-w-none dark:prose-dark"
            :field="page.data.content"
          />
        </div>
      </div>
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

    const { pages } = usePrismicAPI({
      data: 'pages',
      method: 'query',
      query: {
        predicates: 'at',
        path: 'document.type',
        queryValue: 'page',
        options: {
          page: 1,
          pageSize: 2
        }
      }
    })

    return { pages }
  },
  head: {}
})
</script>
