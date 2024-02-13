<script>
import TACanvas from '@/components/molecuels/TACanvas.vue';
import TAPageBase from '@/components/templates/TAPageBase.vue';
//import TAButton from '@/components/atoms/TAButton.vue';
import TAButtonArray from '@/components/molecuels/TAButtonArray.vue';

export default {
	name: 'App',
	components: {
		TACanvas,
		TAPageBase,
		//TAButton,
		TAButtonArray
	},
	data() {
		return {
			buttons: {
				0: {
					text: '新規作成',
					icon: 'mdi-plus',
					primary: true
				},
				1: {
					text: 'インポート',
					color: 'primary',
					icon: 'mdi-import'
				},
				2: {
					text: 'エクスポート',
					icon: 'mdi-export'
				},
				3: {
					text: '複数選択',
					color: 'on-background',
					icon: 'mdi-checkbox-marked-outline'
				},
				4: {
					text: '削除',
					color: 'error',
					icon: 'mdi-delete-outline'
				}
			}
		}
	},
	methods: {
		buttonClicked(button) {
			console.log('次のボタンが押されました:' + button);
		}
	}
}
</script>

<template>
	<TAPageBase title="Vue 練習用">
		<TACanvas title="TACanvas コンポーネント" caption="Atomic Design : Molecuels">
			<p>灰色の背景に白地でコンテンツを表示したい時に使用する，自作のコンポーネントです．</p>
			<h2>TAButtonArray コンポーネント</h2>
			<p>複数のボタンを並べるコンポーネントです．ボタンはデータをバインディングして定義します．(Slotに<code>v-btn</code> または <code>TAButton</code> コンポーネントを複数書いても可)</p>
			<TAButtonArray :buttons="buttons" @buttonClicked="(button) => buttonClicked(button)" />
		</TACanvas>
		
	</TAPageBase>
</template>
