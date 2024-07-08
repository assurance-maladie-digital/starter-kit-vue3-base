import { describe, it, expect, vi, beforeEach } from 'vitest'

import {mount} from '@vue/test-utils'
import Home from '../HomeView.vue'
import { vuetify } from '../../../tests/unit/setup'

import { createPinia, setActivePinia } from 'pinia'
import { useNotificationStore } from '@/stores/notifications'

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

        const h1Text = wrapper.find('h1').text();
        expect(h1Text).toContain('Mocked Title');

        mockGetConfig.mockRestore();
    })

    it('calls notificationStore.create with correct payload when createNotification is called', async () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [vuetify],
            },
        })

        const notificationStore = useNotificationStore()
        const spy = vi.spyOn(notificationStore, 'create')

        wrapper.vm.createNotification()

        expect(spy).toHaveBeenCalledWith({ message: 'Notification de test', type: 'success' })

        spy.mockRestore()
    })
    it('calls notificationStore.remove when removeNotification is called', async () => {
        const wrapper = mount(Home, {
            global: {
                plugins: [vuetify],
            },
        })

        const notificationStore = useNotificationStore()
        const spy = vi.spyOn(notificationStore, 'remove')

        wrapper.vm.removeNotification()

        expect(spy).toHaveBeenCalled()

        spy.mockRestore()
    })

    })
