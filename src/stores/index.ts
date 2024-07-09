import { createStore } from 'vuex'

const store = createStore({
    state: {
        notifications: [],
    },
    mutations: {
        addNotification(state, notification) {
            state.notifications.push(notification)
        },
        clearNotification(state) {
            state.notifications = []
        },
    },
    actions: {
        addNotification({ commit }, notification) {
            commit('addNotification', notification)
        },
        clearNotification({ commit }) {
            commit('clearNotification')
        },
    },
    modules: {},
})

export default store
