<script>
import TACanvas from '@/components/molecuels/TACanvas.vue';
import TAPageBase from '@/components/templates/TAPageBase.vue';
import SNSPostWidget from '@/components/organisms/SNSPostWidget.vue';
import SNSPost from '@/classes/SNSPost';

export default {
	name: 'App',
	components: {
		TACanvas,
		TAPageBase,
		SNSPostWidget
	},
	data:() => ({
		title: 'Mastodon/Misskey 投稿埋め込み ウィジェット',
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
				href: '../dekanji/'
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
				icon: 'mdi-account-multiple',
				active: true
			},
			'ソースコード',
			{
				title: 'GitHub リポジトリ',
				icon: 'mdi-xml',
				href: "https://github.com/t-asa2000/ta-toolbox",
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
		urlInput: '',
		uri: undefined
	}),
	methods: {
		async preview() {
			if (this.urlInput ?? '' != '') {
				const post = await new SNSPost(this.urlInput, false).fetchPost();
				this.uri = post?.uri ?? this.urlInput;
				this.urlInput = post?.uri ?? this.urlInput;
			}
		}
	}
}
</script>

<template>
	<TAPageBase :title="title" :menu="menu" :buttons="buttons">
		<TACanvas :title="title" icon="mdi-account-multiple" caption="分散SNSの投稿をブログやサイトに掲載" class="mb-3">
			<v-text-field label="投稿のURLを入力" v-model="urlInput" color="primary" variant="outlined" class="pt-3" clearable/>
			<div class="d-flex flex-row ga-3 my-2">
				<v-btn variant="tonal" prepend-icon="mdi-eye-arrow-right" color="primary" @click.stop="preview()">プレビューを表示</v-btn>
			</div>
		</TACanvas>
		<TACanvas title="プレビュー" icon="mdi-monitor" headerLevel=2 class="mb-3" v-if="uri != undefined"  :key="uri">
			<SNSPostWidget class="mx-n5" :uri="uri" />
		</TACanvas>
		<TACanvas title="更新履歴" icon="mdi-history" headerLevel=2 class="mb-3">
		</TACanvas>
	</TAPageBase>
</template>

<style>
.v-text-field.dekanji input {
	font-size: 80px !important;
}

</style>