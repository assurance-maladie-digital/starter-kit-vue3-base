import { defineStore } from 'pinia'
import { useStore as useVuexStore } from 'vuex'
import type { NotificationObj } from '@cnamts/synapse-bridge/src/modules/notification/types'

export const useNotificationStore = defineStore({
    id: 'notification',
    state: () => ({
        notificationPayload: {} as NotificationObj | null,
    }),
    actions: {
        async create(payload: NotificationObj) {
            this.notificationPayload = payload
            const vuexStore = useVuexStore()
            await vuexStore.dispatch('notification/addNotification', payload)
        },
        remove() {
            this.notificationPayload = null
            const vuexStore = useVuexStore()
            vuexStore.dispatch('notification/clearNotification')
        },
    },
})