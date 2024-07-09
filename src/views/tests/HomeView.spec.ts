import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import Home from '../HomeView.vue'
import { vuetify } from '../../../tests/unit/setup'

import { createPinia, setActivePinia } from 'pinia'

import * as injectEnv from '@/composables/injectEnv'

describe('HomeView', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    it('should render', async () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [vuetify],
            },
        })

        expect(wrapper.html()).toMatchSnapshot()

        const h1Text = wrapper.find('h1').text()
        expect(h1Text).toContain('Accueil')
    })

    it('renders title from config', async () => {
        // Mock the getConfig function to return a specific title
        const mockGetConfig = vi.spyOn(injectEnv, 'getConfig').mockReturnValue({
            config: {
                value: { title: 'Mocked title', message: 'Mocked message' },
            },
            error: null,
        } as any)

        const wrapper = mount(Home, {
            global: {
                plugins: [vuetify],
            },
        })

        const h1Text = wrapper.find('h1').text()
        expect(h1Text).toContain('Mocked title')

        const helloWorld = wrapper.find('.helloWorld').text()
        expect(helloWorld).toContain('Mocked message')

        mockGetConfig.mockRestore()
    })

    it('renders default message when no prop is provided', () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [vuetify],
            },
        })
        expect(wrapper.text()).toContain('Bonjour')
    })
})
