import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'
import Cadastro from '../views/CadastroView.vue'
import EntradaViewVue from '@/views/EntradaView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastroProduto',
      name: 'cadastro',
      component: Cadastro
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registroentrada',
      name: 'entrada',
      component: EntradaViewVue
    },
    {
      path: '/produtos',
      name: 'produtos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProdutosView.vue')
    }
  ]
})

export default router
