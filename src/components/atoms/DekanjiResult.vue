<script>
	export default {
		name: 'DekanjiResult',
		props: {
			word: {
				type:String,
				default: '',
				required:false
			}
		}
	}
</script>

<template>
	<div class="dekanji-result py-2 text-center">
		<template  v-if="word != null && word != ''">
			<template v-for="(char, index) in word.split('')" :key="index">
				{{ char }}<br>
			</template>
		</template>
	</div>
</template>

<style>
	.dekanji-result {
		font-size: 256px;
		line-height: 1.03;
		letter-spacing: 0.1em;
	}
</style>