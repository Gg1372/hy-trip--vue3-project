import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import pinia from '@/stores'

// vant UI 组件库
import { Button, Rate, Tabbar, TabbarItem } from 'vant';

import 'normalize.css'
import './assets/css/index.css'

const app = createApp(App);

// 使用组件
app.use(router);
app.use(pinia);
app.use(Button)
app.use(Rate);
app.use(Tabbar).use(TabbarItem);

// 挂载app
app.mount('#app');
