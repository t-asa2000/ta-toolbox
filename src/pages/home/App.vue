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
		title: 'TA道具箱',
		menu: mainMenu('/')
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
		<DekanjiForm class="my-3"/>
		<h1 class="px-2 py-3">このサイトについて</h1>
		<TACanvas class="mb-3">
			<p>個人的に「あったらいいな」と思ったツールを自作して公開しているサイトです。</p>
			<p>このサイトをスマートフォンのホーム画面に追加すると、様々なツールに素早くアクセスすることができます。</p>
		</TACanvas>
		<h1 class="px-2 py-3">今後実装予定</h1>
		<TACanvas title="貨幣・汎用カウンター" icon="mdi-counter" caption="数を数えて合計金額を表示" headerLevel=2 class="mb-3">
			<p>1円玉から万札までの貨幣別のカウンターと、その合計金額を表示します。データはブラウザ内に保存されるため、ブラウザを閉じても再度続きからカウントすることができます。</p>
			<p>また、それぞれのカウンターに重み(かける数)を指定してその合計を表示する「汎用カウンター」もあります。ゲームの点数計算をする時などに便利です。</p>
			<div class="d-flex flex-column flex-sm-row justify-center justify-sm-start ga-3 my-2">
				<v-btn variant="plain" style="pointer-events:none;" color="primary">ただいま準備中</v-btn>
			</div>
		</TACanvas>
		<TACanvas title="URL一括修正ツール" icon="mdi-xml" caption="複数のURLをまとめて処理" headerLevel=2 class="mb-3">
			<p>ドメインの置換やGETパラメータの消去など、URLを指定したルールに従って一括処理します。</p>
			<div class="d-flex flex-column flex-sm-row justify-center justify-sm-start ga-3 my-2">
				<v-btn variant="plain" style="pointer-events:none;" color="primary">ただいま準備中</v-btn>
			</div>
		</TACanvas>
		<TACanvas title="Mastodon/Misskey 投稿埋め込みウィジェット" icon="mdi-account-multiple" caption="分散SNSの投稿をブログやサイトに掲載" headerLevel=2 class="mb-3">
			<p>分散SNS「Mastodon」「Misskey」の投稿を埋め込めるWebパーツを生成します。</p>
			<div class="d-flex flex-column flex-sm-row justify-center justify-sm-start ga-3 my-2">
				<v-btn variant="plain" style="pointer-events:none;" color="primary">ただいま準備中</v-btn>
			</div>
		</TACanvas>
	</TAPageBase>
</template>