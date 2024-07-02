import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Maintenance from '../MaintenanceView.vue'
import { vuetify } from '../../../tests/unit/setup'

describe('MaintenanceView', () => {
    it('renders properly', () => {
        const wrapper = mount(Maintenance, {
            global: {
                plugins: [vuetify],
            },
        })
        expect(wrapper.html()).toMatchSnapshot()

        const h2Text = wrapper.find('h2').text()
        expect(h2Text).toContain('Maintenance en cours')
    })
})
