<script>
import TACanvas from '@/components/molecuels/TACanvas.vue';
import TAPageBase from '@/components/templates/TAPageBase.vue';
//import TAButton from '@/components/atoms/TAButton.vue';
//import TAButtonArray from '@/components/molecuels/TAButtonArray.vue';

export default {
	name: 'App',
	components: {
		TACanvas,
		TAPageBase,
		//TAButton,
		//TAButtonArray
	},
	data:() => ({
		menu: [
			't-asa2000 Tools',
			{
				title: 'ホーム',
				icon: 'mdi-home',
				active: true
			},
			'ツール一覧',
			{
				title: 'デ漢字',
				icon: 'mdi-ideogram-cjk'
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
		]
	}),
	methods: {
		buttonClicked(button) {
			console.log('次のボタンが押されました:' + button);
		}
	}
}
</script>

<template>
	<TAPageBase title="t-asa2000 Tools" :menu="menu">
		<h1 class="px-2 py-3">このサイトについて</h1>
		<TACanvas class="mb-3">
			<p>個人的に「あったらいいな」と思ったツールを自作して公開しているサイトです。</p>
		</TACanvas>
		<h1 class="px-2 py-3">今後実装予定</h1>
		<TACanvas title="デ漢字" caption="あの漢字の書き順なんだっけ？" headerLevel=2 class="mb-3">
			<p>数文字の単語を入力すると、その単語を大きい文字サイズに拡大して表示します。</p>
			<p>漢字の書き順や細かい部分の確認にお使いください。</p>
			<div class="d-flex justify-center justify-sm-start my-2">
				<v-btn variant="plain" style="pointer-events:none;" color="primary">ただいま準備中</v-btn>
			</div>
		</TACanvas>
		<TACanvas title="貨幣・汎用カウンター" caption="数を数えて合計金額を表示" headerLevel=2 class="mb-3">
			<p>1円玉から万札までの貨幣別のカウンターと、その合計金額を表示します。データはブラウザ内に保存されるため、ブラウザを閉じても再度続きからカウントすることができます。</p>
			<p>また、その応用としてそれぞれのカウンターに重み(かける数)を指定してその合計を表示する「汎用カウンター」も実装します。</p>
			<div class="d-flex flex-column flex-sm-row justify-center justify-sm-start ga-3 my-2">
				<v-btn variant="plain" style="pointer-events:none;" color="primary">ただいま準備中</v-btn>
			</div>
		</TACanvas>
		<TACanvas title="URL一括修正ツール" caption="複数のURLをまとめて処理" headerLevel=2 class="mb-3">
			<p>ドメインの置換やGETパラメータの消去など、URLを指定したルールに従って一括処理します。</p>
			<div class="d-flex flex-column flex-sm-row justify-center justify-sm-start ga-3 my-2">
				<v-btn variant="plain" style="pointer-events:none;" color="primary">ただいま準備中</v-btn>
			</div>
		</TACanvas>
		<TACanvas title="Mastodon/Misskey 投稿埋め込みウィジェット" caption="分散SNSの投稿をブログやサイトに掲載" headerLevel=2 class="mb-3">
			<p>分散SNS「Mastodon」「Misskey」の投稿を埋め込めるWebパーツを生成します。</p>
			<div class="d-flex flex-column flex-sm-row justify-center justify-sm-start ga-3 my-2">
				<v-btn variant="plain" style="pointer-events:none;" color="primary">ただいま準備中</v-btn>
			</div>
		</TACanvas>
	</TAPageBase>
</template>