import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store.js'
import Gerentes from '../views/Gerentes.vue'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
//import NovoUsuario from '../views/NovoUsuario.vue'
Vue.use(VueRouter)
/*Somente criar o componente não é suficiente,
 e precisaremos identificar para o Vue que, em determinado caminho 
 da url do navegador, será exibido esse componente. */
const routes = [
  {
    path: '',
    name: 'home',
    component: Home,
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes,
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
//lazy-load route components - evitar auemtno do tempo de carregamento da página    
    component: () => import(/* webpackChunkName: "registrar" */ '../views/NovoUsuario.vue'),
    //component: NovoUsuario,
    meta: {
//define rotas como públicas
//apenas página de cadastro é uma rota pública que não necessita de token para ser acessada     
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


//guardando rotas globalmente com hook beforeEach - método guardião global
// rota de destino, rota de origem e fluxo de navegação
router.beforeEach((routeTo, routeFrom, next) => {
// se a rota não for pública e o usuário não
// tiver token significa que ele está deslogado e deve ser
// direcionado ao login
  if (!routeTo.meta.publica && !store.state.token) {
    return next({
      path:'/login'
    });
  }
  next();
})

export default router
