import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { registerBaseComponents, loadPlugins } from '@/helpers'
import './styles/tailwind.css'

export const app = createApp(App)

/**
 * Automatically load Vue plugins
 */
loadPlugins(['vue-fontawesome', 'vue-toastification'])
/**
 * Automatically import and register Base components
 */
registerBaseComponents(app)

app
  .use(store)
  .use(router)
  .mount('#app')
