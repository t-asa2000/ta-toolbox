<script>
	import SNSPost from '@/classes/SNSPost';

	export default {
		name: 'SNSPostWidget',
		props: {
			uri: {
				type: String,
				default: '',
				required: false
			}
		},
		data:() => ({
			postData: undefined,
			pleaseWait: true
		}),
		async mounted() {
			const post = await new SNSPost(this.uri).fetchPost();
			this.postData = post?.postData;
			this.pleaseWait = false;
		}
	}
</script>

<template>
	<v-card class="sns-post-widget pa-2 elevation-0">
		<template v-if="postData != undefined">
			<v-card-actions>
				<v-list-item style="overflow: unset;" class="w-100">
					<template v-slot:prepend>
						<v-avatar :image="postData.userImg" />
					</template>
					
					<v-list-item-title style="white-space:unset" class="font-weight-bold">{{ postData.userDisplayName }}</v-list-item-title>
					
					<v-list-item-subtitle style="white-space:unset;min-height: 1.2em">{{ postData.userName + '@' + postData.server }}</v-list-item-subtitle>
					
					<!--v-list-item-subtitle style="white-space:unset;min-height: 1.2em" class="pt-1"
					>{{ postData.date }}</v-list-item-subtitle
					-->
				</v-list-item>
			</v-card-actions>
			
			<v-card-text style="font-size: 1.2em; line-height: 1.2" class="py-2" v-if="postData.htmlOutput" v-html="postData.text" />
			
			<v-card-text style="font-size: 1.2em; line-height: 1.2" class="py-2" v-else>
				<template v-for="(line, index) in postData.text" :key="index">
					{{ line }}<br>
				</template>
			</v-card-text>

			<v-card-actions class="pt-3">
				<v-btn color="primary" variant="tonal" class="ms-2 px-4" prepend-icon="mdi-open-in-app" :href="postData.uri" target="_blank" rel="noopener noreferrer">元投稿を開く</v-btn>
			</v-card-actions>
		</template>

		<v-card-text style="line-height: 1.2" class="text-h5 py-2" v-else>
			{{ pleaseWait ? 'しばらくお待ちください。' : '投稿を取得できません。' }}
		</v-card-text>

	</v-card>
</template>