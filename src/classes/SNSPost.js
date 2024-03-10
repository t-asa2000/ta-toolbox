import SNSPostUri from "./SNSPostUri";
import escapeHtml from "@/scripts/escapeHtml";

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
		this.redirect = redirect; // リダイレクト(リモート投稿の直接取得)

		this.text = undefined; // 本文(1行ごとに分割されたHTMLの配列)
		this.date = undefined; // 投稿日時

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
			text: this.text,
			date: this.date,
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
		const uri = this.redirect ? new SNSPostUri(this.uri) : undefined;
		if (uri?.server != undefined && this.server != uri.server) {
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

		console.log(resp);

		// 投稿の本文を取得 (MastodonのAPIはHTML形式で投稿の本文を返す)
		this.text = [this.parseMastodonEmojis(resp?.content, resp?.emojis)];

		// 投稿の詳細を取得
		this.postId = resp?.id ?? this.postId;
		this.uri = resp?.uri ?? 'https://' + this.server + '/web/statuses/' + this.postId;
		this.date = resp?.created_at != undefined ? new Date(resp.created_at).toLocaleString() : undefined;

		// ユーザーの詳細を取得
		this.userName = resp?.account?.username;
		this.userDisplayName = escapeHtml(resp?.account?.display_name);
		this.userDisplayName = this.parseMastodonEmojis(this.userDisplayName, resp?.account?.emojis);
		this.userImg = resp?.account?.avatar_static;

		if (this.userName != undefined) {
			this.userUri = 'https://' + this.server + '/@' + this.userName;
		}
	}

	// imgタグの生成
	createImg(text, src) {
		const img = document.createElement('img');
		img.alt = text;
		img.src = src;
		img.style.display = 'inline';
		img.style.verticalAlign = 'sub';
		img.style.maxHeight = '1em';
		img.style.objectFit = 'contain';

		return img;
	}

	// Mastodonの絵文字をパースする
	parseMastodonEmojis(text, emojis) {
		if (text == undefined || emojis == undefined) return text;

		// 各絵文字に対応したHTMLソースコードへの置換
		for(var i = 0; i < emojis.length ; i++) {
			const html = this.createImg(':' + emojis[i].shortcode + ':', emojis[i].static_url).outerHTML;
			text = text.split(':' + emojis[i].shortcode + ':').join(html);
		}

		return text;
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

		console.log(resp);

		// 投稿の本文を取得 (1行ごとに分割)
		this.text = resp?.text?.split('\n');
		if (this.text != undefined) {
			// 1行ずつ絵文字をパースする
			for (var i = 0; i < this.text.length; i++) {
				this.text[i] = escapeHtml(this.text[i]);
				this.text[i] = await this.parseMisskeyEmojis(this.text[i]);
			}
		}

		// 投稿の詳細を取得
		this.postId = resp?.id ?? this.postId;
		this.uri = resp?.uri ?? 'https://' + this.server + '/notes/' + this.postId;
		this.date = resp?.createdAt != undefined ? new Date(resp.createdAt).toLocaleString() : undefined;

		// ユーザーの詳細を取得
		this.userName = resp?.user?.username;
		this.userDisplayName = escapeHtml(resp?.user?.name);
		this.userDisplayName = await this.parseMisskeyEmojis(this.userDisplayName);
		this.userImg = resp?.user?.avatarUrl;

		if (this.userName != undefined) {
			this.userUri = 'https://' + this.server + '/@' + this.userName;
		}
	}

	// Misskeyの絵文字Urlを取得する
	async getMisskeyEmojiUrl(name) {
		// APIエンドポイント
		const endpoint = 'https://' + this.server + '/api/emoji';
		// APIパラメータ
		const param = { name : name };
		
		// APIから絵文字情報を取得
		const api = await fetch(endpoint, {
			method : 'POST',
			body : JSON.stringify(param),
			headers : {
				'Content-Type' : 'application/json'
			}
		});
		var resp = await api.json();

		// URLを返す
		return resp?.url;
	}

	// Misskeyの絵文字をパースする
	async parseMisskeyEmojis(text) {
		if (text == undefined) return undefined;

		// 絵文字の取得
		const emojis = text.match(/\:[0-9a-zA-Z\-\_]+\:/g)
			?.map(x => x.replace(/\:/g, ''))
			.filter((x, i, self) => self.indexOf(x) === i) ?? [];

		// 各絵文字に対応したHTMLソースコードへの置換
		for(var i = 0; i < emojis.length ; i++) {
			const url = await this.getMisskeyEmojiUrl(emojis[i]);
			const html = this.createImg(':' + emojis[i] + ':', url).outerHTML;
			text = text.split(':' + emojis[i] + ':').join(html);
		}
		
		return text;
	}
}