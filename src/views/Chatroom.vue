<script setup>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import Chat from '@/components/Chat.vue';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

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
    <Chat />
  </div>
</template>

<style scoped></style>