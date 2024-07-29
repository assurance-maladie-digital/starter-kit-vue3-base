<template>
	<PageContainer>
		<MaintenancePage />
	</PageContainer>
	<FooterBar
		hide-a11y-link
		hide-cgu-link
		hide-cookies-link
		hide-legal-notice-link
		hide-sitemap-link
	>
		<p class="text--secondary mb-0">Contenu supplémentaire.</p>
	</FooterBar>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
	PageContainer,
	FooterBar,
	MaintenancePage
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		PageContainer,
		FooterBar,
		MaintenancePage
	},
	data() {
		return {
		}
	},
	computed: {
	},
	methods: {
	}
});
</script>
