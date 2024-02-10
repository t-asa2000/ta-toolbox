// Vue
import { createApp } from 'vue'

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css' ;

// 全エントリポイント共通の処理 (Vueコンポーネント，出力先のHTML要素)
export default (component, element = "#app") => {
	// Vuetifyの初期化
	const vuetify = createVuetify({
		components,
		directives,
		icons: {
			iconfont: 'mdi',
		}
	});

	// Vueの初期化
	const app = createApp(component);
	app.use(vuetify);
	app.mount(element);
}