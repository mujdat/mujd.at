import { shallowMount } from '@vue/test-utils'
import Btn from '@/components/Btn.vue'

describe('Btn', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(Btn)
    expect(wrapper.vm).toBeTruthy()
  })
})
