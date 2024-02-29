<script>
import TACanvas from '@/components/molecuels/TACanvas.vue';
import TAPageBase from '@/components/templates/TAPageBase.vue';
import DekanjiForm from '@/components/organisms/DekanjiForm.vue';
import mainMenu from '@/scripts/mainMenu';

export default {
	name: 'App',
	components: {
		TACanvas,
		TAPageBase,
		DekanjiForm
	},
	data:() => ({
		title: 'デ漢字',
		menu: mainMenu('/dekanji/'),
		word: ''
	}),
	methods: {
		buttonClicked(button) {
			console.log('次のボタンが押されました:' + button);
		}
	}
}
</script>

<template>
	<TAPageBase :title="title" :menu="menu">
		<DekanjiForm class="my-3" />
		<TACanvas title="更新履歴" icon="mdi-history" headerLevel=2 class="mb-3">
			<p><b class="pe-6">2024.2.19</b>フォントと文字サイズの変更に対応しました。設定値はブラウザに保存され、次回以降も引き継がれます。<br>当サイトはGoogle Fontsから「Noto Sans JP」「BIZ UD/UDP明朝」「BIZ UD/UDPゴシック」の5種類のフォントを使用しています。</p>
			<p><b class="pe-6">2024.2.19</b>初版公開</p>
		</TACanvas>
	</TAPageBase>
</template>

<style>
.v-text-field.dekanji input {
	font-size: 80px !important;
}

</style>