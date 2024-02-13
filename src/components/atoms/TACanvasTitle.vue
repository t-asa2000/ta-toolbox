<script>
	export default {
		name: "TACanvasTitle", // キャンバスのタイトル
		props: {
			title: { // 表示するタイトル
				type: String,
				default: "",
				required: false
			},
			headerLevel: { // 使用するHタグのレベル(0=Hタグ不使用)
				type: Number,
				default: 1,
				required: false,
				validator: (v) => v >= 0 && v <= 6
			},
		}
	}
</script>

<template>
	<div class="ta-canvas-title font-weight-bold" v-if="headerLevel == 0">{{ title }}</div>
	<h1 class="ta-canvas-title" v-if="headerLevel == 1">{{ title }}</h1>
	<h2 class="ta-canvas-title" v-if="headerLevel == 2">{{ title }}</h2>
	<h3 class="ta-canvas-title" v-if="headerLevel == 3">{{ title }}</h3>
	<h4 class="ta-canvas-title" v-if="headerLevel == 4">{{ title }}</h4>
	<h5 class="ta-canvas-title" v-if="headerLevel == 5">{{ title }}</h5>
	<h6 class="ta-canvas-title" v-if="headerLevel == 6">{{ title }}</h6>
</template>

<style>
	.ta-canvas-title {
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
		font-size: 1.7em;
		border-bottom: 2px solid rgb(var(--v-theme-primary));
	}
</style>

