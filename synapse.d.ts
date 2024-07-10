declare module '@cnamts/synapse-bridge/modules/notification' {
    export const actions: {
        addNotification(context: any, payload: any): void
        clearNotification(context: any): void
    }
}
