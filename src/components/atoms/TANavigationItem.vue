<script>
	export default {
		name: "TANavigationItem",
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
			active: { // 現在のページかどうか
				type: Boolean,
				default: false,
				required: false
			},
			newTab: { // 新しいタブで開くか
				type: Boolean,
				default: false,
				required: false
			}
		},
		computed: {
			disabled() {
				return this.href == '' && !this.active;
			},
			target() {
				return this.newTab ? '_blank' : '';
			},
			rel() {
				return this.newTab ? 'noopener noreferrer' : '';
			},
			titleClasses() {
				return {
					'font-weight-bold' : this.active
				}
			}
		}
	}
</script>

<template>
	<v-list-item class="ta-navigation-item" :active="active" :href="href" :disabled="disabled" :target="target" :rel="rel" color="primary">
		<template v-slot:prepend>
			<v-icon :icon="icon" />
		</template>
		<v-list-item-title :class="titleClasses" v-text="title" />
	</v-list-item>
</template>

<style>
	.ta-navigation-item .v-list-item-title {
		word-break: keep-all;
		white-space: unset;
	}
</style>