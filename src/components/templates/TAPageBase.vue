<script>
	export default {
		name: "TAPageBase",
		props: {
			title: {
				type: String,
				default: '',
				required: false
			}
		},
		data: () => ({
			drawer: false,
			items: [
				{
					title: 'ホーム',
					icon: 'mdi-home',
					current: true
				},
				{
					title: '作成者の個人サイト',
					icon: 'mdi-account-circle',
					link: "javascript:window.open('https://t-asa2000.net/')"
				}
			],
		})
	}
</script>

<template>
	<v-layout>
		<v-app-bar color="primary" prominent>
			<v-app-bar-nav-icon class="mt-1" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="px-2">{{ title }}</v-toolbar-title>
			<v-spacer class="d-none d-sm-block"></v-spacer>
			<v-btn variant="text" class="mt-1" icon="mdi-account-circle" href="javascript:window.open('https://t-asa2000.net/')" />
		</v-app-bar>

	<v-navigation-drawer v-model="drawer" location="left" temporary>
		<v-list>
    		<v-list-subheader>メインメニュー</v-list-subheader>
			<v-list-item
				v-for="(item, i) in items"
				:key="i"
				:value="item"
				:href="item.link"
				class="py-4"
			>
				<template v-slot:prepend>
					<v-icon :class="item.current ? ['text-primary'] : []" :icon="item.icon" :style="item.current ? {'opacity' : 1} : {}"></v-icon>
				</template>

				<v-list-item-title :class="item.current ? ['font-weight-bold', 'text-primary'] : []" v-text="item.title"></v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>

	<v-main class="mx-auto mt-3">
		<slot></slot>
	</v-main>

	</v-layout>
</template>

<style>
body
{
	color: rgb(var(--v-theme-on-background));
	background-color:rgb(var(--v-theme-surface-light));
}
.v-main
{
	max-width: min(960px, calc(100% - 20px));
}
</style>