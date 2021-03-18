import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.css'
import './assets/css/style.scss'
import './assets/css/animation.scss'
import './assets/css/responsive.scss'

createApp(App).mount('#app')
// 载入所有 svg icon
const requireContext = require.context('./assets/images/svg', false, /\.svg$/)
requireContext.keys().forEach(requireContext)
