<script>
	export default {
		name: 'DekanjiResult',
		props: {
			word: {
				type:String,
				default: '',
				required:false
			},
			size: {
				type: Number,
				default: 1,
				required: false
			},
			font: {
				type:String,
				default: '',
				required:false
			}
		},
		computed: {
			styles() {
				return {
					'font-size' : this.size + 'px',
					'font-family' : "'" + this.font + "'"
				}
			}
		}
	}
</script>

<template>
	<div class="dekanji-result py-2 text-center" :style="styles">
		<template v-if="word != null && word != ''">
			<template v-for="(char, index) in word.split('')" :key="index">
				{{ char }}<br>
			</template>
		</template>
	</div>
</template>

<style>
	.dekanji-result {
		line-height: 1.03;
		letter-spacing: 0.1em;
	}
</style>