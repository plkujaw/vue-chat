<script setup>
import { ref, defineEmits } from 'vue';
import useSignup from '@/composables/useSignup';

const emit = defineEmits(['signup']);
const username = ref('');
const email = ref('');
const password = ref('');

const { signup, error } = useSignup();

const handleSubmit = async () => {
  await signup(username.value, email.value, password.value);
  if (!error.value) {
    emit('signup');
  }
};
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" name="username" required placeholder="Username" v-model="username" />
    <input type="email" name="email" required placeholder="Email" v-model="email" />
    <input type="password" name="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<style scoped>
</style>
