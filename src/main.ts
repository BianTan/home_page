import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/style.scss'

createApp(App).mount('#app')
// 2. 载入所有svg icon
const requireContext = require.context('./assets/images/svg', false, /\.svg$/)
requireContext.keys().forEach(requireContext)
