export default class StorageManager {
	// コンストラクター
	constructor(name, isLocal, isJson) {
		this.name = name; // 名前(キー)
		this.isLocal = isLocal; // ローカルストレージであるかどうか
		this.isJson = isJson; // JSON形式であるかどうか
	}

	// 読み込み
	load() {
		// ローカル/セッションストレージから読み込み
		const data = this.isLocal ? localStorage[this.name] : sessionStorage[this.name];
		return data != undefined && this.isJson ? JSON.parse(data) : data;
	}

	// 書き込み
	save(data) {
		// JSONの場合は文字列に変換
		if (this.isJson) data = JSON.stringify(data);
		// ローカル/セッションストレージに書き込み
		if (this.isLocal) {
			localStorage[this.name] = data;
		} else {
			sessionStorage[this.name] = data;
		}
	}

	// ローカルストレージのエクスポート
	static exportLocal() {
		const local = {
			values: {}, // 文字列
			objects: {} // JSON
		}

		for(key in localStorage) {
			try {
				local.objects[key] = JSON.parse(localStorage[key]);
			} catch {
				local.values[key] = localStorage[key];
			}
		}

		return local;
	}

	// ローカルストレージのインポート
	static importLocal(local) {
		// 文字列のインポート
		for (key in local.values) {
			localStorage[key] = local.values[key];
		}

		// JSONのインポート
		for (key in local.objects) {
			localStorage[key] = JSON.stringify(local.objects[key]);
		}
	}
}