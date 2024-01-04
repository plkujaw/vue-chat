<script setup>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin';

const emit = defineEmits(['login']);
const email = ref('');
const password = ref('');

const { login, error } = useLogin();

const handleSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) {
    emit('login');
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" name="email" required placeholder="Email" v-model="email" />
    <input type="password" name="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log In</button>
  </form>
</template>

<style scoped></style>
