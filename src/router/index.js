import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TeamsOverview from "../views/TeamsOverview";
import Signup from "@/views/Signup";
import Teampage from "@/views/Teampage";
import Matches from "@/views/Matches";
import TeamPageAdmin from "@/views/TeamPageAdmin";

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/teamsoverview",
    name: 'Teamsoverview',
    component: TeamsOverview
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/team/:id',
    name: 'Teampage',
    component: Teampage
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches
  },
  {
    path: '/admteams',
    name: 'TeamPageAdmin',
    component: TeamPageAdmin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});




export default router
