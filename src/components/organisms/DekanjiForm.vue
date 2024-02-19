<script>
	import TACanvas from '../molecuels/TACanvas.vue';
	import DekanjiResult from '../atoms/DekanjiResult.vue';

	const defaultSize = 256;
	const defaultFonts = ['Noto Sans JP','BIZ UDGothic', 'BIZ UDPGothic','BIZ UDMincho','BIZ UDPMincho'];

	export default {
		name: 'DekanjiForm',
		components: {
			TACanvas,
			DekanjiResult
		},
		data: () => ({
			word: '', // 表示する漢字(熟語)
			size: defaultSize, // 文字サイズ
			font: defaultFonts[0], // フォント
			fonts: defaultFonts,
			fontChangeMode: false
		}),
		mounted() { // 読み込み時，localStorageから設定を復元する
			if (localStorage.dekanji != undefined) {		
				const obj = JSON.parse(localStorage.dekanji);

				if (obj.size != undefined) this.size = obj.size;
				if (obj.font != undefined) this.font = obj.font;
			}
		},
		computed: {
			_font: {
				get() {
					return this.font;
				},
				set(v) {
					this.font = v;
					this.save();
				}
			}
		},
		methods: {
			save() { // localStorageに設定を保存する
				const obj = {
					size: this.size,
					font: this.font
				};

				localStorage.dekanji = JSON.stringify(obj);
			},
			reset() { // 設定を既定値にリセット
				this.size = defaultSize;
				this.font = defaultFonts[0];
				
				this.save();
			},
			sizeDown() { // フォントサイズを下げる
				const size = Math.floor(this.size - 16);
				this.size = size > 16 ? size : 16;
				this.save();
			},
			sizeUp() { // フォントサイズを上げる
				const size = Math.floor(this.size + 16);
				this.size = size > 16 ? size : 16;
				this.save();
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
		
		<!-- フォント変更用のコンボボックス(ボタンを押すと表示/非表示) -->
		<v-combobox label="フォントを選択" placeholder="プリセットまたはお使いのデバイスにインストールされているフォント名を入力" variant="outlined" :class="fontChangeMode ? ['pt-3'] : ['d-none']" :items="fonts" v-model="_font" clearable />
		
		<!-- 拡大表示 -->
		<DekanjiResult :word="word" :size="size" :font="_font" />
	</TACanvas>
</template>