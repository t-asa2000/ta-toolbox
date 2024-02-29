<script>
	import TAAppBarButton from '../atoms/TAAppBarButton.vue';

	export default {
		name: "TAAppBar",
		components: {
			TAAppBarButton
		},
		props: {
			title: {
				type: String,
				default: '',
				required: false
			},
			navIcon: {
				type: Boolean,
				default: true,
				required: false
			},
			buttons: {
				type: Array,
				default: () => { return [] },
				required: false
			}
		}
	}
</script>

<template>
	<v-app-bar class="ta-app-bar" color="primary">
		<v-app-bar-nav-icon v-if="navIcon" class="d-lg-none mt-1" variant="text" @click.stop="$emit('navIconClick')" />
		<v-toolbar-title class="pe-2">{{ title }}</v-toolbar-title>
		<v-spacer class="d-none d-sm-block" />
		<TAAppBarButton v-for="(button, index) in buttons" :key="index" v-bind="button" class="mt-1" />
	</v-app-bar>
</template>