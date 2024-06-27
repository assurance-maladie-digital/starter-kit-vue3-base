import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NotFound from '../NotFoundView.vue'
import { vuetify } from '../../../tests/unit/setup'

describe('NotFoundView', () => {
    it('renders properly', () => {
        const wrapper = mount(NotFound, {
            global: {
                plugins: [
                    vuetify,
                ],
            }
        })
        expect(wrapper.html()).toMatchSnapshot();

        const h2Text = wrapper.find('h2').text();
        expect(h2Text).toContain('Page non trouvée');
    })
})
