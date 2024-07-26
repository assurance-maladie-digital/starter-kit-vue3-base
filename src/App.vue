<template>
    <VApp>
        <AppHeader />
        <PageContainer>
            <RouterView />
        </PageContainer>
        <FooterBar
            hide-a11y-link
            hide-cgu-link
            hide-cookies-link
            hide-legal-notice-link
            hide-sitemap-link
        >
            <p class="text-secondary mb-0">Contenu supplémentaire.</p>
        </FooterBar>
    </VApp>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue';
import { PageContainer, FooterBar } from '@cnamts/synapse-bridge'

const navigationItems = [
    {
        label: 'Accueil',
        to: '/home',
    }
]
</script>
