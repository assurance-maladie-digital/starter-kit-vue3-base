import { describe, it, expect, vi, beforeEach } from 'vitest'

import {mount} from '@vue/test-utils'
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
            config: { value: { title: 'Mocked Title' } },
            error: null
        });

        const wrapper = mount(Home, {
            global: {
                plugins: [vuetify],
            },
        })


        // Assert that the computed title is rendered
        const h1Text = wrapper.find('h1').text();
        expect(h1Text).toContain('Mocked Title');

        // Clean up the mock to avoid affecting other tests
        mockGetConfig.mockRestore();
    })
})
