<script>
	import TACanvasCaption from "../atoms/TACanvasCaption.vue";
	import TACanvasTitle from "../atoms/TACanvasTitle.vue";

	export default {
		name: "TACanvas", // キャンバス
		components: {
			TACanvasCaption,
			TACanvasTitle
		},
		props: {
			title: { // 表示するタイトル
				type: String,
				default: "",
				required: false
			},
			icon: { // アイコン
				type: String,
				default: "",
				required: false
			},
			headerLevel: { // タイトルに使用するHタグのレベル(0=Hタグ不使用)
				type: Number,
				default: 1,
				required: false,
				validator: (v) => v >= 0 && v <= 6
			},
			caption: { // 表示するキャプション
				type: String,
				default: "",
				required: false
			}
		}
	}
</script>

<template>
	<div class="ta-canvas rounded bg-background elevation-2 px-6 py-3">
		<div class="pt-1 pb-2" v-if="title != ''">
			<TACanvasCaption :caption="caption" v-if="caption != ''" />
			<TACanvasTitle :title="title" :icon="icon" :headerLevel="headerLevel" />
		</div>
		<slot></slot>
	</div>
</template>

<style>
	.ta-canvas h1,.ta-canvas h2,.ta-canvas h3,.ta-canvas h4,.ta-canvas h5,.ta-canvas h6,.ta-canvas p,.ta-canvas ul,.ta-canvas ol {
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
	}
	.ta-canvas ul,.ta-canvas ol {
		list-style-position: inside;
		padding-left: 0.2rem;
	}
	.ta-canvas hr {
		margin: 0.5em auto;
		width: min(20%, 280px);
	}
</style>