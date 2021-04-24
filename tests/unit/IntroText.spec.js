import { shallowMount } from '@vue/test-utils'
import IntroText from '@/components/IntroText.vue'

describe('IntroText', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(IntroText)
    expect(wrapper.vm).toBeTruthy()
  })
})
