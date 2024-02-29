<script>
	import TAAppBar from '../molecuels/TAAppBar.vue';
	import TANavigation from '../molecuels/TANavigation.vue';

	export default {
		name: "TAHeader",
		components: {
			TAAppBar,
			TANavigation
		},
		props: {
			title: {
				type: String,
				default: '',
				required: false
			},
			buttons: {
				type: Array,
				default: () => { return [] },
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
	<div class="ta-header">
		<!-- アプリバー -->
		<TAAppBar :navIcon="menu.length > 0" :title="title" :buttons="buttons" @navIconClick="drawer = !drawer" />

		<!-- ナビゲーションドロワー -->
		<!-- 1280px以上で常時表示 -->
		<TANavigation v-if="menu.length > 0" :items="menu" class="d-none d-lg-flex" always />

		<!-- 1280px未満の場合は左上のアイコンで切り替え -->
		<TANavigation v-if="menu.length > 0" v-model="drawer" :items="menu" class="d-lg-none" />
	</div>
</template>

<style>
	@media (min-width: 1280px) {
		.v-navigation-drawer__scrim{
			display: none;
		}
	}
</style>