<template>
  <div>
    <div>
      <h2 class="title">Contact</h2>
      <div class="prose-sm md:prose md:max-w-none dark:prose-dark">
        <p>
          If you want to chat, you can reach out to me via
          <a href="https://twitter.com/mujdatkorkmaz" title=" Twitter"
            ><strong>DM on Twitter</strong></a
          >, but if you want to work with me on an awesome project, you can send
          an email to
          <a href="mailto:me@mujd.at" title=" Email"
            ><strong>me@mujd.at</strong></a
          >
          with the details.
        </p>
      </div>
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
