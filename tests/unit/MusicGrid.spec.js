import { shallowMount } from '@vue/test-utils'
import MusicGrid from '@/components/MusicGrid.vue'

describe('MusicGrid', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(MusicGrid)
    expect(wrapper.vm).toBeTruthy()
  })
})
