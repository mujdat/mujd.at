import { shallowMount } from '@vue/test-utils'
import ThemeToggler from '@/components/ThemeToggler.vue'

describe('ThemeToggler', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(ThemeToggler)
    expect(wrapper.vm).toBeTruthy()
  })
})
