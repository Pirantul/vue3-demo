import { createRouter, createWebHashHistory } from 'vue-router'
import TheHome from './components/TheHome.vue'
// import Counter from './components/Counter.vue'
import TheDate from './components/TheDate.vue'

const routes = [
  {
    path: '/', 
    component: TheHome,
  },
  {
    path: '/date', 
    component: TheDate,
  },
  // {
  //   path: '/counter', 
  //   name: 'Counter',
  //   component: Counter,
  // },
]
export default createRouter({
  history: createWebHashHistory(),
  routes
})