import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NotFound from '../NotFoundView.vue'
import { vuetify } from '../../../tests/unit/setup'

describe('NotFoundView', () => {
    const mockRouter = {
        push: vi.fn()
    };

    const mockRoute = {
        fullPath: '/test',
        name: undefined,
        path: '/test',
    };

    it('renders properly', () => {
        const wrapper = mount(NotFound, {
            global: {
                plugins: [
                    vuetify,
                ],
                mocks: {
                    $router: mockRouter,
                    $route: mockRoute
                },
            },
        })
        expect(wrapper.html()).toMatchSnapshot();

        const h2Text = wrapper.find('h2').text();
        expect(h2Text).toContain('Page non trouvée');
    })
})