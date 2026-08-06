import { createApp } from 'vue'
import { createPinia } from 'pinia'

// =========================================================================
// 1. External UI Libraries & Styles
// =========================================================================

// Vue-Toastification (Global notification system)
import Toast, { POSITION } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// Bootstrap 5 Framework & Icons
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// =========================================================================
// 2. Core Application & Routing
// =========================================================================
import App from './App.vue'
import router from './router'

// Create root Vue application instance
const app = createApp(App)

// =========================================================================
// 3. Toast Notifications Global Configuration
// =========================================================================
const toastOptions = {
  position: POSITION.TOP_RIGHT, // Toast display position
  timeout: 3000, // Auto-dismiss after 3000ms
  closeOnClick: true, // Dismiss on click
  pauseOnHover: true, // Pause auto-dismiss timer on hover
  draggable: true, // Allow drag-to-dismiss
  rtl: true, // Enable Right-To-Left layout support
}

// =========================================================================
// 4. Plugin Registration
// =========================================================================
app.use(createPinia()) // Pinia state management store
app.use(router) // Vue Router instance
app.use(Toast, toastOptions) // Global toast notifications plugin

// =========================================================================
// 5. Application Mount
// =========================================================================
app.mount('#app')
