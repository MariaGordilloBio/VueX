import Vue from 'vue'
import VueRouter from 'vue-router'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import NovoUsuario from '../views/NovoUsuario.vue'
import Login from '../views/Login.vue'
import provedor from '@/provedor'
Vue.use(VueRouter)
/*Somente criar o componente não é suficiente,
 e precisaremos identificar para o Vue que, em determinado caminho 
 da url do navegador, será exibido esse componente. */
const routes = [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    component: NovoUsuario,
    meta: {
//define rotas como públicas      
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      //define rotas como públicas      
      publica: true
    }
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
// se a rota não fro pública e o usuário não
// tiver token significa que ele está deslogado e deve ser
// direcionado ao login
  if (!routeTo.meta.publica && !provedor.state.token) {
    return next({
      path:'/login'
    });
  }
  next();
})

export default router
