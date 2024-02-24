// Mastodonの投稿に関する情報を取得
function getMastodonPostInfo(url) {
	return getMastodonPostInfo1(url)
		?? getMastodonPostInfo2(url)
		?? getMastodonPostInfo3(url);
}

// Mastodonの投稿に関する情報を取得 (`/web/statuses/`形式のURL)
function getMastodonPostInfo1(url) {
	// URLを'/web/statuses/'の前後で分割
	const arr = url.split('/web/statuses/');
	if (arr.length != 2) return null;

	// サーバーのドメイン(正規表現でhttps://より後を抽出)
	const server = arr[0].split('https://')[1]
	// 投稿ID(正規表現で一番最初の記号の前までを抽出)
	const postId = arr[1].split(/[^0-9a-zA-Z]/)[0]
	if (postId == '') return null;

	// 投稿に関する情報を返す
	return {
		service : 'mastodon',
		server : server,
		postId : postId
	}
}

// Mastodonの投稿に関する情報を取得 (`/@<ユーザーID>/`形式のURL)
function getMastodonPostInfo2(url) {
	// URLを'/@'の前後で分割
	const arr1 = url.split('/@');
	if (arr1.length != 2) return null;
	// '/@'より後の部分を'/'で分割
	const arr2 = arr1[1].split('/');
	if (arr2.length < 2) return null;

	// サーバーのドメイン(正規表現でhttps://より後を抽出)
	const server = arr1[0].split('https://')[1]
	// 投稿ID(正規表現で一番最初の記号の前までを抽出)
	const postId = arr2[1].split(/[^0-9a-zA-Z]/)[0]
	if (postId == '') return null;

	// 投稿に関する情報を返す
	return {
		service : 'mastodon',
		server : server,
		postId : postId
	}
}

// Mastodonの投稿に関する情報を取得 (`/users/<ユーザーID>/statuses/`形式のURL)
function getMastodonPostInfo3(url) {
	// URLを'/users/'の前後で分割
	const arr1 = url.split('/users/');
	if (arr1.length != 2) return null;
	// '/users/'より後の部分を'/statuses/'で分割
	const arr2 = arr1[1].split('/statuses/');
	if (arr2.length != 2) return null;

	// サーバーのドメイン(正規表現でhttps://より後を抽出)
	const server = arr1[0].split('https://')[1]
	// 投稿ID(正規表現で一番最初の記号の前までを抽出)
	const postId = arr2[1].split(/[^0-9a-zA-Z]/)[0]
	if (postId == '') return null;

	// 投稿に関する情報を返す
	return {
		service : 'mastodon',
		server : server,
		postId : postId
	}
}

// Misskeyの投稿に関する情報を取得
function getMisskeyNoteInfo(url) {
	// URLを'/notes/'の前後で分割
	const arr = url.split('/notes/');
	if (arr.length != 2) return null;

	// サーバーのドメイン(正規表現でhttps://より後を抽出)
	const server = arr[0].split('https://')[1]
	// ノートID(正規表現で一番最初の記号の前までを抽出)
	const noteId = arr[1].split(/[^0-9a-zA-Z]/)[0]
	if (noteId == '') return null;

	// 投稿に関する情報を返す
	return {
		service : 'misskey',
		server : server,
		postId : noteId
	}
}

export default function getPostInfo(url, service = null) {
	switch (service) {
		case 'mastodon':
			return getMastodonPostInfo(url);
		case 'misskey':
			return getMisskeyNoteInfo(url);
		default:
			return getMastodonPostInfo(url)
				?? getMisskeyNoteInfo(url);
	}
};