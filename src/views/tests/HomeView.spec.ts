import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Home from '../HomeView.vue'
import { vuetify } from '../../../tests/unit/setup'

describe('HomeView', () => {
	it('renders properly', () => {
		const wrapper = mount(Home, {
			global: {
				plugins: [
					vuetify,
				],
			}
		})
		expect(wrapper.html()).toMatchSnapshot();

		const h1Text = wrapper.find('h1').text();
		expect(h1Text).toContain('Accueil');
	})
})
