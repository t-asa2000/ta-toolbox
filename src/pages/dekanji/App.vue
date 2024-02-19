<script>
import TACanvas from '@/components/molecuels/TACanvas.vue';
import TAPageBase from '@/components/templates/TAPageBase.vue';
import DekanjiForm from '@/components/organisms/DekanjiForm.vue';

export default {
	name: 'App',
	components: {
		TACanvas,
		TAPageBase,
		DekanjiForm
	},
	data:() => ({
		title: 'デ漢字',
		menu: [
			'TA道具箱',
			{
				title: 'ホーム',
				icon: 'mdi-home',
				href: '../'
			},
			'ツール一覧',
			{
				title: 'デ漢字',
				icon: 'mdi-ideogram-cjk',
				href: './',
				active: true
			},
			{
				title: '貨幣カウンター 汎用カウンター',
				icon: 'mdi-counter'
			},
			{
				title: 'URL一括修正ツール',
				icon: 'mdi-xml'
			},
			{
				title: 'Mastodon/Misskey 投稿埋め込み ウィジェット',
				icon: 'mdi-account-multiple'
			},
			'ソースコード',
			{
				title: 'GitHub リポジトリ',
				icon: 'mdi-xml',
				href: "https://github.com/t-asa2000/vue-practice-npm",
				newTab: true
			},
			'開発者 (t-asa2000)',
			{
				title: '個人サイト',
				icon: 'mdi-account-circle',
				href: "https://t-asa2000.net/",
				newTab: true
			},
			{
				title: 'GitHub',
				icon: 'mdi-link-variant',
				href: "https://github.com/t-asa2000/",
				newTab: true
			},
			{
				title: 'Misskey',
				icon: 'mdi-link-variant',
				href: "https://misskey.io/@asata",
				newTab: true
			},
			{
				title: 'Fedibird (Mastodon)',
				icon: 'mdi-link-variant',
				href: "https://fedibird.com/@asata",
				newTab: true
			}
		],
		buttons: [
			{
				title: 'ホーム',
				icon: 'mdi-home',
				href: '../'
			}
		],
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
	<TAPageBase :title="title" :menu="menu" :buttons="buttons">
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