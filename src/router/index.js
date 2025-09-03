import { createRouter, createWebHistory } from 'vue-router'

import SettingsView from '../views/SettingsView.vue'
import RoomView from '@/views/RoomView.vue'
import DriverRoutesView from '@/views/DriverRoutesView.vue'
import GeneralSettingsView from '@/views/GeneralSettingsView.vue'
import ProfileSettingsView from '@/views/ProfileSettingsView.vue'
import PrivacySettingsView from '@/views/PrivacySettingsView.vue'
import RegistrationView from '@/views/RegistrationView.vue'
import TermsView from '@/views/TermsView.vue'

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
    meta: {transition: 'settings', background: 'white-background'},
    children: [
      {path: '', name: 'Настройки', component: GeneralSettingsView, meta: {transition: 'settings', background: 'white-background'}},
      {path: 'profile', name: 'Настройки профиля', component: ProfileSettingsView, meta: {transition: 'settings', background: 'white-background'}},
      {path: 'privacy', name: 'Приватность', component: PrivacySettingsView, meta: {transition: 'settings', background: 'white-background'}},
      {path: 'payment', name: 'Способы оплаты', component: ProfileSettingsView, meta: {transition: 'settings', background: 'white-background'}},
      {path: 'instructions', name: 'Инструкция', component: ProfileSettingsView, meta: {transition: 'settings', background: 'white-background'}},
      {path: 'about', name: 'О нас', component: ProfileSettingsView, meta: {transition: 'settings', background: 'white-background'}},
    ],
  },
  { 
    path: '/room', 
    component: RoomView, 
    name: 'Room',
    meta: {transition: 'room'}
  },
  { 
    path: '/registration', 
    component: RegistrationView, 
    name: 'Registration',
    meta: {transition: 'registration', background: 'white-background'}
  },
  { 
    path: '/terms', 
    component: TermsView, 
    name: 'terms',
    meta: {transition: 'terms', background: 'white-background'}
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router