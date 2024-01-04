<script setup>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { timestamp } from '@/firebase/config';


const { currentUser } = getUser();
const { addDoc, error } = useCollection('messages');

const message = ref('');

const handleSubmit = async () => {
  const chat = {
    message: message.value,
    user: currentUser.value.displayName,
    date: timestamp(),
  };
  await addDoc(chat);

  if (!error.value) {
    message.value = '';
    console.log(chat);
  }
};
</script>

<template>
  <form>
    <textarea placeholder="Type a message and press enter to send" v-model="message"
      @keypress.enter.prevent="handleSubmit"></textarea>
  </form>
</template>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  resize: none;
  max-width: 100%;
  margin-bottom: 10px;
  outline: none;
  font-family: inherit;
  box-sizing: border-box;
}
</style>