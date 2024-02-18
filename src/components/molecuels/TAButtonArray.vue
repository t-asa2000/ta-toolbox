<script>
	import TAButton from '../atoms/TAButton.vue'

	export default {
		name: "TAButtonArray", // ボタン配列
		components: {
			TAButton
		},
		props: {
			buttons: { // ボタン(配列，TAButtonのPropsを入れる)
				type: Array,
				default: () => { return [] },
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
		}
	}
</script>

<template>
	<div :class="classes" >
		<TAButton v-for="(button, index) in buttons" v-bind:key="index" v-bind="button" @click="$emit('buttonClicked', index)" />
		<slot></slot>
	</div>
</template>

