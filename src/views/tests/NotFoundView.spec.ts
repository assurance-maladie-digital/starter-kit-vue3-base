import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import NotFound from '../NotFoundView.vue'
import { vuetify } from '../../../tests/unit/setup'

describe('NotFoundView', () => {
    const mockRouter = {
        push: vi.fn(),
    }

    const mockRoute = {
        fullPath: '/test',
        name: undefined,
        path: '/test',
    }

    let wrapper: any

    beforeEach(async () => {
        wrapper = mount(NotFound, {
            global: {
                plugins: [vuetify],
                mocks: {
                    $router: mockRouter,
                    $route: mockRoute,
                },
            },
        })
        await wrapper.vm.$nextTick()
    })

    it('renders properly', () => {
        expect(wrapper.html()).toMatchSnapshot()

        const h2Text = wrapper.find('h2').text()
        expect(h2Text).toContain('Page non trouvée')
    })

    /*it('should render and call setSupportId method', async () => {
        wrapper.vm.setSupportId();
        await wrapper.vm.$nextTick();

        expect(mockRouter.push).toHaveBeenCalled();
    })*/
})
