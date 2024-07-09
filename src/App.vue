<template>
    <VApp>
        <HeaderBar
            service-title="Titre du service"
            service-sub-title="Description du service"
            :navigation-items="navigationItems"
        />
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
import { PageContainer, HeaderBar, FooterBar } from '@cnamts/synapse-bridge'

const navigationItems = [
    {
        label: 'Accueil',
        to: '/home',
    }
]
</script>
