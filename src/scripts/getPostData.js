import getPostInfo from "./getPostInfo";

async function getMastodonPost(server, postId, allowRedirect) {
	// APIエンドポイント
	const endpoint = 'https://' + server + '/api/v1/statuses/' + postId;
	
	// APIから投稿を取得
	const api = await fetch(endpoint, {
		method : 'GET'
	});
	const resp = await api.json();

	// 必要な項目が見つからなければnullを返す
	if (resp.content == undefined || resp.url == undefined) return null;

	// サーバー(ドメイン)が一致しない場合(リモート投稿の場合)
	if (!serverValidation(server, resp.url)) {
		// リモートのサーバーから直接取得する
		return allowRedirect ? await getRemoteData(resp.url) : null;
	}

	// 投稿データを返す
	return {
		service : 'mastodon',
		server : server,
		postId : postId,
		postUrl : resp.url,
		user : resp.account.username != undefined ? resp.account.username : null,
		userName : resp.account.display_name != undefined ? resp.account.display_name : null,
		userUrl : resp.account.username != undefined ? 'https://' + server + '/@' + resp.account.username : null,
		userImg : resp.account.avatar_static != undefined ? resp.account.avatar_static : null,
		text : [], // Misskey用なので使用しない
		rawHtml : resp.content // 投稿の本文
	}
}

async function getMisskeyNote(server, noteId, allowRedirect) {
	// APIエンドポイント
	const endpoint = 'https://' + server + '/api/notes/show';
	// APIパラメータ
	const param = { noteId : noteId };
	
	// APIからノートを取得
	const api = await fetch(endpoint, {
		method : 'POST',
		body : JSON.stringify(param),
		headers : {
			'Content-Type' : 'application/json'
		}
	});
	var resp = await api.json();

	// ノートが見つからなければnullを返す
	if (resp.text == undefined) {
		// リノートの場合は元ノートのデータをrespに代入
		if (resp.renote != undefined && resp.renote.text != undefined) {	
			resp = resp.renote;
		} else {
			return null;
		}
	}

	// リモート投稿の場合
	if (resp.uri != undefined) {
		return allowRedirect ? await getRemoteData(resp.uri) : null;
	}

	// ノートデータを返す
	return {
		service : 'misskey',
		server : server,
		postId : noteId,
		postUrl : 'https://' + server + '/notes/' + noteId,
		user : resp.user.username != undefined ? resp.user.username : null,
		userName : resp.user.name != undefined ? resp.user.name : null,
		userUrl : resp.user.username != undefined ? 'https://' + server + '/@' + resp.user.username : null,
		userImg : resp.user.avatarUrl != undefined ? resp.user.avatarUrl : null,
		text : resp.text.split('\n'), // 投稿の本文(1行ごとに分割)
		rawHtml : null // Mastodon用なので使用しない
	}
}

// 同一サーバーかどうか検証
function serverValidation(server, url) {
	// URLから先頭のhttpsを削除
	url = url.replace('https://', '');

	// 同一サーバーかどうか返す
	return server == url.split('/')[0];
}

// リモート投稿の取得
async function getRemoteData(url) {
	const info = getPostInfo(url);
	return info != null ? await getPostData(info.service, info.server, info.postId, false) : null;
}

// 分散SNS投稿データの取得
export default async function getPostData(service, server, postId, allowRedirect = true) {
	switch (service) {
		case 'mastodon':
			return await getMastodonPost(server, postId, allowRedirect);
		case 'misskey':
			return await getMisskeyNote(server, postId, allowRedirect);
		default:
			return null;
	}
}