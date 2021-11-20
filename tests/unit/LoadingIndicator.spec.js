import { shallowMount } from '@vue/test-utils'
import LoadingIndicator from '~/components/SkeletonLoader.vue'

describe('LoadingIndicator', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(LoadingIndicator)
    expect(wrapper.vm).toBeTruthy()
  })
})
