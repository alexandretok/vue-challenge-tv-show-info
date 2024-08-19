import { createApp, Plugin } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from './plugins/i18n.js';

createApp(App)
.use(i18n as Plugin)
.mount('#app')
