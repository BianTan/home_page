import { createApp } from 'vue'
import App from './App.vue'

// 初始化 css
import 'normalize.css'
// 全局 css
import './assets/style.scss'

// Live2D
import './assets/js/bundle.js'

createApp(App).mount('#app')
