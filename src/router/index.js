import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Chatroom from '../views/Chatroom.vue';
import { auth } from '@/firebase/config';

// auth guard
const requireAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (!user) {
    next({ name: 'Welcome' });
  } else {
    next();
  }
};

const requireNoAuth = (to, from, next) => {
  let user = auth.currentUser;
  if (user) {
    next({ name: 'Chatroom' });
  } else {
    next();
  }
};

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: '/chat-room',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
