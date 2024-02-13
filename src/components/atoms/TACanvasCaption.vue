<script>
	export default {
		name: "TACanvasCaption", // キャンバスのキャプション
		props: {
			caption: { // 表示するキャプション
				type: String,
				default: "",
				required: false
			}
		}
	}
</script>

<template>
	<div class="ta-canvas-caption text-primary font-weight-bold">{{ caption }}</div>
</template>

<style>
	.ta-canvas-caption {
		padding-left: 0.17em;
		font-size: 0.8em;
	}
</style>

