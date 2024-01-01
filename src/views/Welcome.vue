<script setup>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

import { ref } from 'vue';
import router from '@/router';

const showLoginForm = ref(true);

const enterChat = () => {
  router.push({ name: 'Chatroom' });
};
</script>

<template>
  <div class="welcome container">
    <p>Henlo</p>
    <div v-if="showLoginForm">
      <h2>Log In</h2>
      <LoginForm @login="enterChat" />
      <p>
        Not registered yet?
        <span @click="showLoginForm = false">Sign Up</span>
      </p>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <SignupForm @signup="enterChat" />
      <p>
        Have an account?
        <span @click="showLoginForm = true">Log In</span>
      </p>
    </div>
  </div>
</template>

<style>
.welcome {
  text-align: center;
  padding: 20px;
}

.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  border-radius: 20px;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
}
</style>
