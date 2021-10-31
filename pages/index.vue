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
      <nuxt-link to="about">
        <btn class="mt-8"
          ><span>More about me</span>
          <outline-external-link-icon
            class="w-4 h-4 ml-2"
          ></outline-external-link-icon>
        </btn>
      </nuxt-link>
    </div>
    <div>
      <h2
        class="
          text-3xl
          mb-6
          mt-16
          tracking-light
          font-extrabold
          text-gray-900
          dark:text-gray-300
        "
      >
        Projects
      </h2>
      <div class="prose dark:prose-dark">
        <p>Here are some of the clients I've worked with:</p>
      </div>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in logoCloud"
        :key="item.name"
        class="
          col-span-1
          flex
          justify-center
          py-8
          px-8
          bg-gray-50
          dark:bg-gray-800
          text-white
        "
      >
        <div
          v-if="item.svg"
          class="
            flex
            items-center
            justify-center
            text-gray-700
            dark:text-white
            transition
            transform
            duration-300
            hover:scale-110
          "
        >
          <a :href="item.href">
            <span v-html="item.logo"></span>
          </a>
        </div>
        <div v-else class="flex items-center justify-center">
          <a
            :href="item.href"
            class="transition transform duration-300 hover:scale-110"
            ><img
              :src="item.logo"
              :alt="item.name"
              class="w-full max-w-[175px] max-h-16"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { usePrismicAPI } from 'nuxt-use-prismic-api'
import { logoCloud } from '@/utils/constants'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const { page, pageLoading } = usePrismicAPI({
      data: 'page',
      method: 'getByUID',
      docType: 'page',
      uid: 'home'
    })

    return { page, pageLoading, logoCloud }
  },
  head: {}
})
</script>
