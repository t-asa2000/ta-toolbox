<script>
	import TACanvas from '../molecuels/TACanvas.vue';
	import DekanjiResult from '../atoms/DekanjiResult.vue';

	export default {
		name: 'DekanjiForm',
		components: {
			TACanvas,
			DekanjiResult
		},
		data: () => ({
			word: '' // 表示する漢字(熟語)
		})
	}
</script>

<template>
	<TACanvas class="dekanji-form" title="デ漢字" icon="mdi-ideogram-cjk" caption="「あの漢字どう書くんだっけ？」そんな時に">
		<p>ただシンプルに漢字を大きく表示するだけのツールです。入力終了後、<b>テキストボックスの外側の好きな場所</b>をタップ・クリックしてください。</p>
		<v-text-field label="拡大したい漢字（熟語）を入力" v-model="word" color="primary" variant="outlined" class="pt-3" clearable/>
		<p>拡大した文字はこの下に表示されます。</p>
		<DekanjiResult :word="word" />
	</TACanvas>
</template>