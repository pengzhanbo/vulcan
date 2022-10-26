import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'
import Counter from '../src/components/Counter.vue'

describe('Counter.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should render', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('1')
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should be interactive', async () => {
    const wrapper = mount(Counter)

    expect(wrapper.find('.inc').exists()).toBe(true)

    expect(wrapper.find('.dec').exists()).toBe(true)

    await wrapper.get('.inc').trigger('click')

    expect(wrapper.text()).toContain('2')

    await wrapper.get('.dec').trigger('click')

    expect(wrapper.text()).toContain('1')
  })
})
