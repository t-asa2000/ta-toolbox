const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	publicPath: "/",
	pages: {
		home: {
			entry: 'src/pages/home/main.js',
			template: 'public/index.html',
			filename: 'index.html',
			title: 'TA道具箱'
		},
		dekanji: {
			entry: 'src/pages/dekanji/main.js',
			template: 'public/index.html',
			filename: 'dekanji/index.html',
			title: 'デ漢字'
		},
		'mastodon-misskey': {
			entry: 'src/pages/mastodon-misskey/main.js',
			template: 'public/index.html',
			filename: 'mastodon-misskey/index.html',
			title: 'Mastodon/Misskey 投稿埋め込みウィジェット'
		}
	}
});
