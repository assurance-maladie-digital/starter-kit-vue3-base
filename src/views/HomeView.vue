<template>
    <h1 class="text-primary">{{ title ? title : 'Accueil' }}</h1>

    <div class="mt-6 mb-12 d-flex align-center justify-center">
        <VCard width="695" variant="tonal" class="d-flex">
            <img src="/starter-kit.svg" alt="Starter kit" />
        </VCard>
    </div>

    <v-row justify="center">
        <v-col cols="12" md="4">
            <v-card color="grey-lighten-4" class="mx-auto">
                <v-card-title>Exemple de composant Vue</v-card-title>
                <v-card-item>
                    <HelloWorld
                        class="helloWorld"
                        :msg="message ? message : 'Bonjour'"
                    />
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="12" md="4">
            <v-card color="grey-lighten-4" class="mx-auto">
                <v-card-title>Exemple de composant DS</v-card-title>
                <v-card-item>
                    <BackBtn to="/home" />
                    <br />
                    <br />
                    <a
                        href="https://digital-design-system.netlify.app/demarrer/introduction/"
                        target="_blank"
                    >
                        Voir la documentation des composants du Design System.
                    </a>
                </v-card-item>
            </v-card>
        </v-col>
        <v-col cols="12" md="4">
            <v-card color="grey-lighten-4" class="mx-auto">
                <v-card-title>Test des stores</v-card-title>
                <v-card-item>
                    <div>Compteur: {{ counterStore?.count }}</div>
                    <div class="d-flex flex-wrap align-center justify-center">
                        <v-btn
                            color="primary"
                            class="ma-2"
                            @click="counterStore?.increment"
                        >
                            Incrémenter
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="ma-2"
                            @click="counterStore?.decrement"
                        >
                            Décrémenter
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="ma-2"
                            @click="counterStore?.reset"
                        >
                            Réinitialiser
                        </v-btn>
                    </div>
                </v-card-item>
                <v-card-item>
                    <div>
                        Notification:
                        {{ notificationStore?.notificationPayload }}
                    </div>
                    <div class="d-flex flex-wrap align-center justify-center">
                        <v-btn
                            color="primary"
                            class="ma-2"
                            @click="createNotification"
                        >
                            Créer une notification
                        </v-btn>
                        <v-btn
                            color="primary"
                            class="ma-2"
                            @click="removeNotification"
                        >
                            Supprimer une notification
                        </v-btn>
                    </div>
                </v-card-item>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'
import { BackBtn } from '@cnamts/synapse-bridge'

import { computed } from 'vue'

import { getConfig } from '@/composables/injectEnv'
import { useCounterStore } from '@/stores/counter'
import { useNotificationStore } from '@/stores/notifications'

const data = getConfig()
const counterStore = useCounterStore()
const notificationStore = useNotificationStore()

const title = computed(() => {
    return data ? data.config.value.title : 'Accueil'
})

const message = computed(() => {
    return data ? data.config.value.message : 'Bonjour'
})

function createNotification() {
    const payload = {
        message: 'Notification de test',
        type: 'success',
    }
    notificationStore.create(payload)
}

function removeNotification() {
    notificationStore.remove()
}
</script>
