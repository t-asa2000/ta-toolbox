import SNSPostUri from "./SNSPostUri";

const MASTODON = 'mastodon';
const MISSKEY = 'misskey';

// SNS投稿クラス(Mastodon/Misskey)
export default class SNSPost {
	// コンストラクター(URI, リダイレクト)
	constructor(uri, redirect = true) {
		// URIを文字列からSNSPostUri オブジェクトに変換
		if (!(uri instanceof SNSPostUri)) uri = new SNSPostUri(uri);

		this.uri = uri.uri; // 投稿のURI
		this.server = uri.server; // サーバーのドメイン
		this.postId = uri.postId; // 投稿ID
		this.service = uri.service; // SNSサービス名(Mastodon/Misskey)
		this.htmlOutput = this.service == MASTODON; // HTML出力モード
		this.redirect = redirect; // リダイレクト(リモート投稿の直接取得)

		this.text = undefined; // 本文(HTMLもしくは1行ごとに分割された文字列の配列)
		this.userName = undefined; // ユーザー名
		this.userDisplayName = undefined; // ユーザー表示名
		this.userUri = undefined; // ユーザーのURL
		this.userImg = undefined; // ユーザーの顔写真
	}

	// 投稿データをオブジェクトとして取得する
	get postData() {
		return {
			uri: this.uri,
			server: this.server,
			postId: this.postId,
			htmlOutput: this.htmlOutput,
			text: this.text,
			userName: this.userName,
			userDisplayName: this.userDisplayName,
			userUri: this.userUri,
			userImg: this.userImg
		}
	}

	// 投稿を取得する (返り値: SNSPost オブジェクト)
	async fetchPost() {
		// 投稿のデータを取得する
		switch(this.service) {
			case MASTODON:
				await this.fetchMastodonPost();
				break;
			case MISSKEY:
				await this.fetchMisskeyPost();
				break;
		}

		// 投稿のデータが取得できなかった場合
		if (this.text == undefined) return undefined;

		// リモート投稿を参照している場合はそのサーバーから直接再取得する(リダイレクト有効時)
		const uri = new SNSPostUri(this.uri);
		if (this.redirect && uri.active && this.server != uri.server) {
			return await new SNSPost(uri, false).fetchPost();
		}

		return this;
	}

	// Mastodonの投稿を取得する
	async fetchMastodonPost() {
		// APIエンドポイント
		const endpoint = 'https://' + this.server + '/api/v1/statuses/' + this.postId;

		// APIから投稿を取得
		const api = await fetch(endpoint, {
			method : 'GET'
		});
		const resp = await api.json();

		//console.log(resp);

		// 投稿の本文を取得 (MastodonのAPIはHTML形式で投稿の本文を返す)
		this.text = resp?.content;

		// 投稿の詳細を取得
		this.postId = resp?.id ?? this.postId;
		this.uri = resp?.uri ?? 'https://' + this.server + '/web/statuses/' + this.postId;

		// ユーザーの詳細を取得
		this.userName = resp?.account?.username;
		this.userDisplayName = resp?.account?.display_name;
		this.userImg = resp?.account?.avatar_static;

		if (this.userName != undefined) {
			this.userUri = 'https://' + this.server + '/@' + this.userName;
		}
	}

	// Misskeyの投稿を取得する
	async fetchMisskeyPost() {
		// APIエンドポイント
		const endpoint = 'https://' + this.server + '/api/notes/show';
		// APIパラメータ
		const param = { noteId : this.postId };
		
		// APIから投稿を取得
		const api = await fetch(endpoint, {
			method : 'POST',
			body : JSON.stringify(param),
			headers : {
				'Content-Type' : 'application/json'
			}
		});
		var resp = await api.json();

		// リノートを参照している場合
		if (resp?.text == undefined && resp?.renote?.text != undefined) {
			// 元の投稿のデータをrespに代入
			resp = resp.renote;
		}

		//console.log(resp);

		// 投稿の本文を取得 (1行ごとに分割)
		this.text = resp?.text?.split('\n');

		// 投稿の詳細を取得
		this.postId = resp?.id ?? this.postId;
		this.uri = resp?.uri ?? 'https://' + this.server + '/notes/' + this.postId;

		// ユーザーの詳細を取得
		this.userName = resp?.user?.username;
		this.userDisplayName = resp?.user?.name;
		this.userImg = resp?.user?.avatarUrl;

		if (this.userName != undefined) {
			this.userUri = 'https://' + this.server + '/@' + this.userName;
		}
	}
}