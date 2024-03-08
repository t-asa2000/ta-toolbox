const MASTODON = 'mastodon';
const MISSKEY = 'misskey';

// SNS投稿(Mastodon/Misskey)のURIを解析するクラス
export default class SNSPostUri {
	// コンストラクター(URI)
	constructor(uri) {
		this.uri = uri.split(/[\#\?]/)[0]; // 投稿のURI(末尾の#や?以降を削除)
		this.server = undefined; // サーバーのドメイン
		this.postId = undefined; // 投稿のID
		this.service = this.getServiceName(); // SNSサービス名(Mastodon/Misskey)

		//console.log(this.service);
	}

	// 有効なURIかどうか
	get active() {
		return this.server != undefined && this.postId != undefined && this.service != undefined;
	}

	// サービス名を取得
	getServiceName() {
		if (this.isHttps()) {
			if (this.isMastodonPost()) return MASTODON;
			if (this.isMisskeyPost()) return MISSKEY;
		}

		return undefined;
	}

	// HTTPSで始まるURIかどうか
	isHttps() {
		return this.uri.match(/^https:\/\/.+/);
	}

	// Mastodonの投稿かどうか
	isMastodonPost() {
		// 先頭のhttps://を削除した後スラッシュで分割
		const arr = this.uri.split('https://')[1].split('/').filter(x => x !== '');

		// ドメインを取得
		this.server = arr[0];

		// パターン1: /users/<ユーザー名>/statuses/<投稿ID> の場合
		if (arr[1] == 'users' && arr[3] == 'statuses') {
			this.postId = arr[4];
			return true;
		}

		// パターン2: /@<ユーザー名>/<投稿ID> の場合
		if (arr[1].match(/^\@.+/)) {
			this.postId = arr[2];
			return true;
		}

		// パターン3: /web/statuses/<投稿ID> の場合
		if (arr[1] == 'web' && arr[2] == 'statuses') {
			this.postId = arr[3];
			return true;
		}

		return false;
	}

	// Misskeyの投稿かどうか
	isMisskeyPost() {
		// 先頭のhttps://を削除した後スラッシュで分割
		const arr = this.uri.split('https://')[1].split('/').filter(x => x !== '');

		// ドメインを取得
		this.server = arr[0];

		// notes/<投稿ID> の場合
		if (arr[1] == 'notes') {
			this.postId = arr[2];
			return true;
		}

		return false;
	}
}