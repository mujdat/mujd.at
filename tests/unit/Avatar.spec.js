import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Avatar from '@/components/Avatar.vue'

describe('Avatar', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Avatar, {
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
