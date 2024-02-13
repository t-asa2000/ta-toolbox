<script>
	//const defaultColor = '';
	const defaultSize = 'large';
	const primaryVariant = 'elevated';
	const secondaryVariant = 'tonal';
	const isDefault = (v) => v == 'default' || v == '';

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
			block: { // アイコンのみ表示
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
			classes() { // マウントするクラス
				return {
					"ta-button" : true,
					"ta-button--primary" : this.primary,
					"font-weight-bold" : true,
					"bg-background" : !this.transparent
				}
			},
			styles() {
				return {
					"text-transform" : this.uppercase ? "uppercase" : "unset"
				}
			},
			_color() {
				return (isDefault(this.color) && this.primary) ? 'primary' : this.color;
			},
			_size() {
				if (this.size == 'normal') return 'default';
				return isDefault(this.size) ? defaultSize : this.size;
			},
			_variant() {
				const defaultVariant = this.primary ? primaryVariant : secondaryVariant;
				return isDefault(this.variant) ? defaultVariant : this.variant;
			}
		}
	}
</script>

<template>
	<v-btn :class="classes" :color="_color" :size="_size" :variant="_variant" :block="block" :style="styles">
		<template v-slot:prepend v-if="icon != ''">
			<v-icon :icon="icon" :color="iconColor"></v-icon>
		</template>
		{{ text }}<slot v-if="text == ''"></slot>
	</v-btn>
</template>

