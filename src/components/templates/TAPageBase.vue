<script>
	import TANavigation from '../molecuels/TANavigation.vue';

	export default {
		name: "TAPageBase",
		components: {
			TANavigation
		},
		props: {
			title: {
				type: String,
				default: '',
				required: false
			},
			menu: {
				type: Array,
				default: () => { return [] },
				required: false
			}
		},
		data: () => ({
			drawer: false
		})
	}
</script>

<template>
	<v-layout>
		<!-- アプリバー -->
		<v-app-bar color="primary">
			<v-app-bar-nav-icon class="d-lg-none mt-1" variant="text" @click.stop="drawer = !drawer" />
			<v-toolbar-title class="pe-2">{{ title }}</v-toolbar-title>
			<v-spacer class="d-none d-sm-block"></v-spacer>
			<v-btn class="mt-1" variant="text" icon="mdi-xml" target="_blank" href="https://github.com/t-asa2000/vue-practice-npm" />
			<v-btn class="mt-1" variant="text" icon="mdi-account-circle" target="_blank" href="https://t-asa2000.net/" />
		</v-app-bar>

		<!-- 1280px以上で常時表示 -->
		<TANavigation :items="menu" class="d-none d-lg-flex" always />

		<!-- 1280px未満の場合は左上のアイコンで切り替え -->
		<TANavigation v-model="drawer" :items="menu" class="d-lg-none" />

		<v-main class="mx-auto mt-3">
			<slot></slot>
		</v-main>
	</v-layout>
</template>

<style>
	body
	{
		color: rgb(var(--v-theme-on-background));
		background-color:rgb(var(--v-theme-surface-light));
	}
	.v-main
	{
		max-width: min(1080px, calc(100% - 20px));
	}
	@media (min-width: 1280px) {
		.v-navigation-drawer__scrim{
			display: none;
		}
	}
</style>