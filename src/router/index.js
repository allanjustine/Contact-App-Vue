import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import ContactList from '@/components/ContactList.vue'
import ContactCreate from '@/components/ContactCreate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'ContactList',
    component: ContactList
  },
  {
    path: '/create-contact',
    name: 'ContactCreate',
    component: ContactCreate
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
