<script>
import TACanvas from '@/components/molecuels/TACanvas.vue';
import TAPageBase from '@/components/templates/TAPageBase.vue';
import SNSPost from '@/classes/SNSPost';

export default {
	name: 'App',
	components: {
		TACanvas,
		TAPageBase
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
		post_url: '',
		postData: undefined
	}),
	methods: {
		async getPost() {
			const post = await new SNSPost(this.post_url).fetchPost();
			this.postData = post?.postData;
			this.post_url = post?.uri ?? this.post_url;
		}
	}
}
</script>

<template>
	<TAPageBase :title="title" :menu="menu" :buttons="buttons">
		<TACanvas :title="title" icon="mdi-account-multiple" caption="分散SNSの投稿をブログやサイトに掲載" class="mb-3">
			<v-text-field label="投稿のURLを入力" v-model="post_url" color="primary" variant="outlined" class="pt-3" clearable/>
			<div class="d-flex flex-row ga-3 my-2">
				<v-btn variant="tonal" color="primary" @click.stop="getPost()">ノートを取得</v-btn>
			</div>
			<template v-if="postData != undefined">
				<h2 v-if="postData.userDisplayName != undefined">{{ postData.userDisplayName }}</h2>
				<p v-if="postData.userName != undefined">{{ postData.userName + '@' + postData.server }}</p>
				<p v-if="postData.userImg != undefined">
					<img :src="postData.userImg" class="rounded" style="width: 250px;" />
				</p>
				<div v-if="postData.htmlOutput" v-html="postData.text" />
				<p v-else-if="postData.text.length > 0">
					<template v-for="(line, index) in postData.text" :key="index">
						{{ line }}<br>
					</template>
				</p>
			</template>
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