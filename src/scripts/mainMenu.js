// メインメニューの生成(現在のパス)
export default function mainMenu(current) {
	const root = process.env.BASE_URL;
	const version = process.env.VUE_APP_VERSION;

	// メニュー項目
	const menu = [
		'TA道具箱',
		{
			title: 'ホーム',
			icon: 'mdi-home',
			href: root
		},
		'ツール一覧',
		{
			title: 'デ漢字',
			icon: 'mdi-ideogram-cjk',
			href: root + 'dekanji/'
		},
		'ソースコード',
		{
			title: 'GitHub リポジトリ',
			icon: 'mdi-xml',
			href: process.env.VUE_APP_HP,
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
		},
		version // 末尾にアプリバージョンを表示
	]

	// 項目がアクティブかどうかを決める
	menu.filter(x => x.href != undefined).forEach(x => x.active = x.href == current);

	return menu;
}