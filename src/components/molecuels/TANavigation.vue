<script>
	import TANavigationItem from '../atoms/TANavigationItem.vue';

	export default {
		name: "TANavigation",
		components: {
			TANavigationItem
		},
		props: {
			modelValue: { // ドロワーを表示するかどうか(デスクトップ環境では常時表示)
				type:Boolean,
				default: false,
				required: false
			},
			items: { // メニュー項目(TANavigationItemのpropsを入れる，文字列を挿入するとセクションを区切ることができる)
				type:Array,
				default: () => { return [] },
				required: false
			},
			always: { // 常時表示
				type:Boolean,
				default: false,
				required: false
			},
			density: {
				type:String,
				default: 'default',
				required: false,
				validator: (v) => ['default','comfortable','compact'].includes(v)
			}
		},
		emits: [
			'update:modelValue'
		],
		computed: {
			value: {
				get() {
					return this.modelValue || this.always;
				},
				set(value) {
					this.$emit('update:modelValue', value)
				}
    		}
		}
	}
</script>

<template>
	<v-navigation-drawer v-model="value" class="ta-navigation" location="left" :temporary="!always" :scrim="!always" width=270>
		<v-list class="pt-4" :density="density">
			<template v-for="(item, index) in items" :key="index">
				<template v-if="item.title == undefined">
					<v-divider class="mb-2" v-if="index > 0" />
					<v-list-subheader v-if="item != ''">{{ item }}</v-list-subheader>
				</template>
				<TANavigationItem v-else v-bind="item"  @click.stop="value = always" class="rounded ma-2"/>
			</template>
		</v-list>
	</v-navigation-drawer>
</template>

<style>
	.v-navigation-drawer__scrim{
		position: fixed;
	}
</style>