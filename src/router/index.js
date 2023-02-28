import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '../views/NotFound.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobsDetails from '../views/jobs/JobsDetails.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:About
  },
  {
    path:'/jobs',
    name:'jobs',
    component:Jobs
  },{
    path:'/jobs/:id',
    name:'jobsDetails',
    component:JobsDetails,
    props:true,
  },
  // catch all 404 
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
