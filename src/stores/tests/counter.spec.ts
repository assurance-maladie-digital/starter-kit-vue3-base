import { createPinia } from 'pinia'
import { useCounterStore } from '../counter'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Counter Store', () => {
    let store: ReturnType<typeof useCounterStore>

    beforeEach(() => {
        const pinia = createPinia()
        store = useCounterStore(pinia)
    })

    it('should have an initial state of empty object', () => {
        expect(store.$state).toEqual({
            count: 0,
        })
    });

    it('increments the count', () => {
        store.increment()
        expect(store.count).toBe(1)
    })

    it('decrements the count', () => {
        store.decrement()
        expect(store.count).toBe(-1)
    })

    it('resets the count', () => {
        store.decrement()
        store.reset()
        expect(store.count).toBe(0)
    })

})
