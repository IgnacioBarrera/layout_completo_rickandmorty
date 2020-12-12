import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue';
import firebase from "firebase";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      login: true
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "login" */ '../views/Registro.vue')
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "login" */ '../views/Editar.vue')
  },
  {
    path: '/Agregandousuario',
    name: 'Agregandousuario',
    component: () => import(/* webpackChunkName: "login" */ '../views/Agregandousuario.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      login: true
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  var usuario = firebase.auth().currentUser;
  
  let registroRequerido = to.matched.some(ruta => ruta.meta.login)
  console.log(registroRequerido);

  if (registroRequerido && !usuario) {
      next('/login');
  } else {
    setTimeout(() => {next()},1000)
  }
})

export default router
