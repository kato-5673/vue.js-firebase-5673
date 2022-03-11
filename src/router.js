import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Comment from './views/comment.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
       { path: '/', component: Home },
       { path: '/commenthome', component: Comment, props: true,},
       { path: '/register', component: Register, props: true,},
       { path: '/login', component: Login, props: true,},
],

})