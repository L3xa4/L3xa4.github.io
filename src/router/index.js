import { createRouter, createWebHistory } from 'vue-router'

import SettingsView from '../views/SettingsView.vue'
import RoomView from '@/views/RoomView.vue'
import DriverRoutesView from '@/views/DriverRoutesView.vue'

const routes = [
  { 
    path: '/', 
    component: DriverRoutesView, 
    name: 'Routes',
    meta: {transition: 'routes'}
  },
  { 
    path: '/settings', 
    component: SettingsView, 
    name: 'Settings',
    meta: {transition: 'settings'}
  },
  { 
    path: '/room', 
    component: RoomView, 
    name: 'Room',
    meta: {transition: 'room'}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router