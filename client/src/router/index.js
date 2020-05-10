import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PersonalWorkout from '../views/PersonalWorkout'
import HeroWorkout from '../views/HeroWorkout'
import TestView from '../views/TestView'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/personalworkout',
    name: 'PersonalWorkout',
    component: PersonalWorkout
  },
  {
    path: '/heroworkout',
    name: 'HeroWorkout',
    component: HeroWorkout
  },
  {
    path: '/testview',
    name: 'TestView',
    component: TestView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
