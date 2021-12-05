<template>
  <div>
    <div>
      <h2 class="title">{{ $t('pages.home.title') }}</h2>
      <div
        class="prose md:max-w-none dark:prose-dark"
        v-html="$sanitize($t('pages.home.text'))"
      ></div>
      <nuxt-link to="about">
        <btn class="mt-8"
          ><span>{{ $t('pages.home.buttonText') }}</span>
          <outline-external-link-icon
            class="w-4 h-4 ml-2"
          ></outline-external-link-icon>
        </btn>
      </nuxt-link>
    </div>
    <div class="mt-16">
      <h2 class="title">{{ $t('pages.home.referencesTitle') }}</h2>
      <div class="prose md:max-w-none dark:prose-dark">
        <p>{{ $t('pages.home.referencesText') }}</p>
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
          rounded-md
        "
      >
        <div class="flex items-center justify-center">
          <a
            :href="item.href"
            :title="item.name"
            class="transition transform duration-300 hover:scale-105"
          >
            <picture>
              <source
                :srcset="item.webp"
                type="image/webp"
                class="w-auto max-w-[175px] max-h-16 object-cover"
              />
              <img
                :src="item.jpg ? item.jpg : item.png"
                :alt="item.name"
                class="w-auto max-w-[175px] max-h-16 object-cover"
              />
            </picture>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { logoCloud } from '@/utils/constants'

export default defineComponent({
  name: 'HomePage',
  setup() {
    return { logoCloud }
  },
  head: {}
})
</script>
