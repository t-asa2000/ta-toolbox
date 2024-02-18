<script>
	export default {
		name: "TAAppBarButton",
		props: {
			title: {
				type: String,
				default: '',
				required: false
			},
			icon: {
				type: String,
				default: '',
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
			}
		},
		computed: {
			variant() {
				return this.href != '' ? 'text' : 'plain';
			},
			target() {
				return this.newTab ? '_blank' : '';
			},
			rel() {
				return this.newTab ? 'noopener noreferrer' : '';
			},
			styles() {
				return {
					'pointer-events' : this.href != '' ? '' : 'none'
				}
			}
		}
	}
</script>

<template>
	<v-btn class="ta-app-bar-button" :style="styles" :variant="variant" :title="title" :icon="icon" :href="href" :target="target" :rel="rel" />
</template>