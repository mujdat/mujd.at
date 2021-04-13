import { shallowMount } from '@vue/test-utils'
import LoadingIndicator from '@/components/LoadingIndicator.vue'

describe('LoadingIndicator', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(LoadingIndicator)
    expect(wrapper.vm).toBeTruthy()
  })
})
