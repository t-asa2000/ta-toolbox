<script>
	import TACanvas from '../molecuels/TACanvas.vue';
	import DekanjiResult from '../atoms/DekanjiResult.vue';
	import Dekanji from '@/classes/Dekanji';

	// 「デ漢字」クラスのインスタンス
	const dekanji = new Dekanji();

	export default {
		name: 'DekanjiForm',
		components: {
			TACanvas,
			DekanjiResult
		},
		data: () => ({
			word: '', // 表示する漢字(熟語)
			fontChangeMode: false, // フォント変更欄の表示有無
			defaultFonts: Dekanji.defaultFonts, // フォント変更欄の選択候補
			storage: dekanji.update() // ローカルストレージに保存するデータ(文字サイズ，フォント)
		}),
		computed: {
			size() { // 文字サイズ
				return this.storage.size;
			},
			font: { // フォント
				get() {
					return this.storage.font;
				},
				set(font) {
					dekanji.font = font;
					this.update();
				}
			}
		},
		methods: {
			update() { // ローカルストレージの更新
				this.storage = dekanji.update();
			},
			reset() { // 設定を既定値にリセット
				dekanji.reset();
				this.update();
			},
			sizeDown() { // 文字サイズを下げる
				dekanji.sizeDown();
				this.update();
			},
			sizeUp() { // 文字サイズを上げる
				dekanji.sizeUp();
				this.update();
			},
		}
	}
</script>

<template>
	<TACanvas class="dekanji-form" title="デ漢字" icon="mdi-ideogram-cjk" caption="「あの漢字どう書くんだっけ？」そんな時に">
		<!-- リセットボタン -->
		<div class="d-flex flex-row justify-end ga-3 my-2">
			<v-btn variant="tonal" color="primary" @click.stop="reset()">設定を既定値にリセット</v-btn>
		</div>
		
		<!-- 説明 -->
		<p>ただシンプルに漢字を大きく表示するだけのツールです。入力終了後、<b>テキストボックスの外側の好きな場所</b>をタップ・クリックしてください。</p>
		<v-text-field label="拡大したい漢字（熟語）を入力" v-model="word" color="primary" variant="outlined" class="pt-3" clearable/>
		<p>拡大した文字はこの下に表示されます。</p>

		<!-- フォント・文字サイズ変更ボタン -->
		<div class="d-flex flex-row justify-space-between ga-3 my-2">
			<v-btn variant="flat" color="primary" @click.stop="sizeDown()">文字－</v-btn>
			<v-btn variant="tonal" color="primary" @click.stop="fontChangeMode = !fontChangeMode">{{ fontChangeMode ? '閉じる' : 'フォント変更' }}</v-btn>
			<v-btn variant="flat" color="primary" @click.stop="sizeUp()">文字＋</v-btn>
		</div>
		
		<!-- フォント変更欄 (コンボボックス, フォント変更ボタンを押すと表示/非表示) -->
		<v-combobox v-if="fontChangeMode" label="フォントを選択" placeholder="プリセットまたはお使いのデバイスにインストールされているフォント名を入力" variant="outlined" class="pt-3" :items="defaultFonts" v-model="font" clearable />
		
		<!-- 拡大表示 -->
		<DekanjiResult :word="word" :size="size" :font="font" />
	</TACanvas>
</template>