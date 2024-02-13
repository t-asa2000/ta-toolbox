<script>
	import TAButton from '../atoms/TAButton.vue'

	export default {
		name: "TAButtonArray", // ボタン配列
		components: {
			TAButton
		},
		props: {
			defaultValues: { // 既定の属性値
				type: Object,
				default: () => { return {} }, 
				required: false
			},
			buttons: { // ボタン(連想配列，ボタン名をキーとしてTAButtonのPropsを入れる)
				type: Object,
				default: () => { return {} },
				required: false
			},
			vertical: { // 縦に並べるかどうか
				type: Boolean,
				default: false,
				required: false
			},
			responsive: { // モバイル端末に最適化
				type: Boolean,
				default: true,
				required: false
			}
		},
		computed: {
			classes() { // マウントするクラス
				return {
					"ta-button-array" : true,
					"ta-button-array--vertical": this.vertical,
					"ta-button-array--responsive": this.responsive,
					"py-3" : true,
					"ga-3" : true,
					"d-flex" : true,
					"flex-wrap": true,
					"flex-column" : this.vertical || this.responsive,
					"flex-row" : !(this.vertical || this.responsive),
					"flex-sm-row" : !this.vertical && this.responsive
				}
			}
		},
		methods: {
			merge(button) {
				const findKey = (key) => Object.keys(button).includes(key);

				// 存在しない属性値をdefaultValuesからコピー
				Object.keys(this.defaultValues).forEach((key) => {
					if (!findKey(key)) button[key] = this.defaultValues[key];
				});

				return button;
			}
		}
	}
</script>

<template>
	<div :class="classes" >
		<TAButton v-for="(button, key) in buttons" v-bind:key="key" v-bind="merge(button)" @click="$emit('buttonClicked', key)" />
		<slot></slot>
	</div>
</template>

