// メインメニューの生成(現在のパス，ルートディレクトリのパス)
export default function mainMenu(current, publicPath = '/') {
	// メニュー項目
	const menu = [
		'TA道具箱',
		{
			title: 'ホーム',
			icon: 'mdi-home',
			href: publicPath
		},
		'ツール一覧',
		{
			title: 'デ漢字',
			icon: 'mdi-ideogram-cjk',
			href: publicPath + 'dekanji/'
		},
		/*{
			title: '貨幣カウンター 汎用カウンター',
			icon: 'mdi-counter',
			href: publicPath + 'counter/'
		},
		{
			title: 'URL一括修正ツール',
			icon: 'mdi-xml',
			href: publicPath + 'url/'
		},
		{
			title: 'Mastodon/Misskey 投稿埋め込み ウィジェット',
			icon: 'mdi-account-multiple',
			href: publicPath + 'mastodon-misskey/'
		},*/
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
	]

	// 項目がアクティブかどうかを決める
	menu.filter(x => x.href != undefined).forEach(x => x.active = x.href == current);

	return menu;
}