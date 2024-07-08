<template>
    <NotFoundPage :key="$route.fullPath" class="mb-6" />
    <PageContainer size="m" spacing="pa-0 pb-8">
        <VBtn class="setSupportId" color="primary" @click="setSupportId">
            Afficher l’identifiant de support
        </VBtn>
    </PageContainer>
</template>

<script setup lang="ts">
import { PageContainer, NotFoundPage } from '@cnamts/synapse-bridge'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function setSupportId(): void {
    router.push({
        path: route.path,
        query: {
            support_id: '1178926558455813315',
        },
    })
}
</script>
