import routes from './routes'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
const head = createHead()

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

app.use(routes)
app.use(pinia)
app.use(head)

app.mount('#app')
