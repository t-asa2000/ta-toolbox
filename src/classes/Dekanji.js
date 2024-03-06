import StorageManager from "./StorageManager";

const DEFAULT_SIZE = 128; // 文字サイズ
const SIZE_STEP = 16; // 文字サイズの変化量
const DEFAULT_FONTS = ['BIZ UDMincho','BIZ UDGothic','BIZ UDPMincho','BIZ UDPGothic','Noto Sans JP']; // フォント

const storage = new StorageManager('dekanji', true, true); // ローカルストレージ

// 「デ漢字」機能クラス
export default class Dekanji {
	// コンストラクター
	constructor() {
		// ローカルストレージから設定を読み込む
		const data = storage.load();
		
		this.size = data?.size ?? DEFAULT_SIZE; // 文字サイズ
		this.font = data?.font ?? DEFAULT_FONTS[0]; // フォント
	}

	// 既定のフォント一覧
	static get defaultFonts(){
		return DEFAULT_FONTS;
	}

	// ローカルストレージを更新
	update() {
		const data = {
			size: this.size,
			font: this.font
		}

		storage.save(data);		
		return data;
	}

	// 文字サイズを下げる
	sizeDown() {
		const size = this.size - SIZE_STEP;
		this.size = size > SIZE_STEP ? size : SIZE_STEP;
	}

	// 文字サイズを上げる
	sizeUp() {
		const size = this.size + SIZE_STEP;
		this.size = size > SIZE_STEP ? size : SIZE_STEP;
	}
	
	// 設定を既定値に戻す
	reset() {
		this.size = DEFAULT_SIZE;
		this.font = DEFAULT_FONTS[0];
	}
}