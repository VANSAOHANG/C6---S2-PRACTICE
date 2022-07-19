import { createApp } from 'vue'
import App from './App.vue'
import NavigationMenu from './components/NavigationMenu.vue'
import FormUser from './components/FormUser.vue'
import UserCard from './components/UserCard.vue'

const app = createApp(App)
app.component('nav-menu', NavigationMenu)
app.component('form-user', FormUser)
app.component('user-card', UserCard)

app.mount('#app')
