import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import Home from '../HomeView.vue'
import { vuetify } from '../../../tests/unit/setup'

import { createPinia, setActivePinia } from 'pinia'

describe('HomeView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('renders properly', () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [vuetify],
            },
        })
        expect(wrapper.html()).toMatchSnapshot()

        const h1Text = wrapper.find('h1').text()
        expect(h1Text).toContain('Accueil')
    })
})
