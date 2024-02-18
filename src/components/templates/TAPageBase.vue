<script>
	import TAHeader from '../organisms/TAHeader.vue';

	export default {
		name: "TAPageBase",
		components: {
			TAHeader
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
		}
	}
</script>

<template>
	<v-layout>
		<!-- ヘッダー -->
		<TAHeader :title="title" :menu="menu" :buttons="buttons" />

		<!-- メイン -->
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
</style>