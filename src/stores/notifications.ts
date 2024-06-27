import { defineStore } from 'pinia';
import { actions as notificationActions } from '@cnamts/synapse-bridge/modules/notification';

export const useNotificationStore = defineStore({
	id: 'notification',
	state: () => ({
		notificationPayload: null,
	}),
	actions: {
		create(payload: any) {
			this.notificationPayload = payload;
			notificationActions.addNotification({ commit: () => {}, state: {} }, payload);
		},
		remove() {
			this.notificationPayload = null;
			notificationActions.clearNotification({ commit: () => {} });
		},
	},
});
