import { createStore } from 'vuex'

interface Notification {
    id: string;
    message: string;
    type: string;
}

const store = createStore({
    state: {
        notifications: [] as Notification[],
    },
    mutations: {
        addNotification(state, notification: Notification) {
            state.notifications.push(notification)
        },
        clearNotification(state) {
            state.notifications = []
        },
    },
    actions: {
        addNotification({ commit }, notification: Notification) {
            commit('addNotification', notification)
        },
        clearNotification({ commit }) {
            commit('clearNotification')
        },
    },
    modules: {},
})

export default store
