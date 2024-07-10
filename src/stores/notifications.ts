import { defineStore } from 'pinia'
import store from '@/stores/'
import type { NotificationObj } from '@cnamts/synapse-bridge/src/modules/notification/types'

export const useNotificationStore = defineStore({
    id: 'notification',
    state: () => ({
        notificationPayload: {} as NotificationObj | null,
    }),
    actions: {
        async create(payload: NotificationObj) {
            this.notificationPayload = payload
            await store.dispatch('addNotification', payload)
        },
        remove() {
            this.notificationPayload = null
            store.dispatch('clearNotification').then((r) => r)
        },
    },
})
