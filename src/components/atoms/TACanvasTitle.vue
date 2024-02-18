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
	<div class="ta-canvas-title">
		<p class="font-weight-bold" v-if="headerLevel == 0">{{ title }}</p>
		<h1 v-if="headerLevel == 1">{{ title }}</h1>
		<h2 v-if="headerLevel == 2">{{ title }}</h2>
		<h3 v-if="headerLevel == 3">{{ title }}</h3>
		<h4 v-if="headerLevel == 4">{{ title }}</h4>
		<h5 v-if="headerLevel == 5">{{ title }}</h5>
		<h6 v-if="headerLevel == 6">{{ title }}</h6>
	</div>
</template>

<style>
	.ta-canvas-title {
		border-bottom: 2px solid rgb(var(--v-theme-primary));
	}

	.ta-canvas-title > h1,.ta-canvas-title > h2,.ta-canvas-title > h3,.ta-canvas-title > h4,.ta-canvas-title > h5,.ta-canvas-title > h6, .ta-canvas-title > p {
		font-size: 1.7em;
	}
</style>

