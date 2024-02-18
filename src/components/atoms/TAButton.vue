<script>
	const primaryColor = 'primary';
	const secondaryColor = 'primary';
	const primarySize = 'large';
	const secondarySize = 'large';
	const primaryVariant = 'elevated';
	const secondaryVariant = 'tonal';

	export default {
		name: "TAButton", // ボタン
		props: {
			text: { // 表示するテキスト
				type: String,
				default: "",
				required: false
			},
			color: { // 色
				type: String,
				default: "",
				required: false
			},
			size: { // 大きさ
				type: [String, Number],
				default: "",
				required: false
			},
			variant: { // 見た目
				type: String,
				default: "",
				required: false
			},
			icon: { // アイコン
				type: String,
				default: "",
				required: false
			},
			iconColor: { // アイコンの色
				type: String,
				default: "",
				required: false
			},
			href: { // リンク先
				type: String,
				default: '',
				required: false
			},
			newTab: { // 新しいタブで開くか
				type: Boolean,
				default: false,
				required: false
			},
			block: { // ブロック要素として表示
				type: Boolean,
				default: false,
				required: false
			},
			primary: { // メインのボタンかどうか
				type: Boolean,
				default: false,
				required: false
			},
			uppercase: { // テキストを大文字にするか
				type: Boolean,
				default: true,
				required: false
			},
			transparent: { // 透過させるかどうか
				type: Boolean,
				default: false,
				required: false
			}
		},
		computed: {
			_color() {
				const defaultColor = this.primary ? primaryColor : secondaryColor;

				return this.color == '' ? defaultColor : this.color;
			},
			_size() {
				const defaultSize = this.primary ? primarySize : secondarySize;

				return this.size == '' ? defaultSize : this.size;
			},
			_variant() {
				const defaultVariant = this.primary ? primaryVariant : secondaryVariant;

				return this.variant == '' ? defaultVariant : this.variant;
			},
			_transparent() {
				return this.transparent || ['elevated', 'flat', 'tonal'].includes(this._variant);
			},
			target() {
				return this.newTab ? '_blank' : '';
			},
			rel() {
				return this.newTab ? 'noopener noreferrer' : '';
			},
			classes() { // マウントするクラス
				return {
					"ta-button" : true,
					"ta-button--primary" : this.primary,
					"font-weight-bold" : true
				}
			},
			styles() { // 適用するCSS
				return {
					"text-transform" : this.uppercase ? "uppercase" : "unset",
					"background-color" : this._transparent ? "" : "rgb(var(--v-theme-background))"
				}
			}
		}
	}
</script>

<template>
	<v-btn :class="classes" :color="_color" :size="_size" :variant="_variant" :href="href" :rel="rel" :target="target" :block="block" :style="styles">
		<template v-slot:prepend v-if="icon != ''">
			<v-icon :icon="icon" :color="iconColor"></v-icon>
		</template>
		{{ text }}<slot v-if="text == ''"></slot>
	</v-btn>
</template>

