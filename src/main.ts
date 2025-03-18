import './assets/main.css'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'
import '@varlet/touch-emulator'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Themes, StyleProvider } from '@varlet/ui'
import App from './App.vue'
import router from './router'
import './assets/text/text.css'

const app = createApp(App)
StyleProvider(Themes.md3Light)
app.use(createPinia())
app.use(router)
app.use(Varlet)
app.mount('#app')
