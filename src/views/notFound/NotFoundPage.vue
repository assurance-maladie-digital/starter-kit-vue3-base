<template>
	<PageContainer>
		<NotFoundPage />

		<br />

		<NotFoundPage
			:key="$route.fullPath"
			class="mb-6"
		/>

		<PageContainer
			size="m"
			spacing="pa-0 pb-8"
		>
			<VBtn
				color="primary"
				@click="setSupportId"
			>
				Afficher l’identifiant de support
			</VBtn>
		</PageContainer>
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
	NotFoundPage,
} from "@cnamts/synapse-bridge";

export default defineComponent({
	components: {
		NotFoundPage,
		PageContainer,
		FooterBar
	},
	data() {
		return {
		}
	},
	computed: {
	},
	methods: {
		setSupportId(): void {
			this.$router.push({
				path: this.$route.path,
				query: {
					support_id: '1178926558455813315'
				}
			});
		}
	}
});
</script>
