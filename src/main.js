import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import pinia from '@/stores'

// vant UI 组件库
import { Button, Rate, Tabbar, TabbarItem, Search, Tab, Tabs, IndexBar, IndexAnchor, Cell, Calendar } from 'vant';

import 'normalize.css'
import './assets/css/index.css'

const app = createApp(App);

// 使用组件
app.use(router);
app.use(pinia);

// vant UI 组件库 开始
app.use(Button);
app.use(Rate);
app.use(Tabbar).use(TabbarItem);
app.use(Search);
app.use(Tab).use(Tabs);
app.use(IndexBar).use(IndexAnchor).use(Cell);
app.use(Calendar);
// vant UI 组件库 结束

// 挂载app
app.mount('#app');
