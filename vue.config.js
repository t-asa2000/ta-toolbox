// 環境変数の設定
const meta = require('./package.json');
process.env.VUE_APP_VERSION = meta.version;
process.env.VUE_APP_HP = meta.homepage;

// Vueの設定
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
		}
	}
});
