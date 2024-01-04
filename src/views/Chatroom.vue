<script setup>
import Navbar from '@/components/Navbar.vue';
import ChatWindow from '@/components/ChatWindow.vue'
import MessageInput from '@/components/MessageInput.vue';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';

const router = useRouter();
const { currentUser } = getUser();

watch(currentUser, () => {
  if (!currentUser.value) {
    router.push({ name: 'Welcome' });
  }
});

</script>

<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <MessageInput />
  </div>
</template>

<style scoped></style>