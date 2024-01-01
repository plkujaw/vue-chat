<script setup>

import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';

const { logout, error } = useLogout();

const { currentUser } = getUser();

const handleLogout = async () => {
  await logout();
};
</script>

<template>
  <nav v-if="currentUser">
    <div>
      <p>{{ currentUser.displayName }}</p>
      <p class="email">{{ currentUser.email }}</p>
    </div>
    <button @click="handleLogout">Log Out</button>
  </nav>
</template>

<style>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

nav p {
  font-size: 1rem;
  color: #444;
  margin: 0;
}

nav p.email {
  font-size: 0.8rem;
  color: #999;
}
</style>