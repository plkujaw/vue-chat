<script setup>
import { ref, onUpdated } from 'vue';
import getCollection from '@/composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
const { error, documents } = getCollection('messages');

const formattedDate = (date) => {
  return formatDistanceToNow(date.toDate(), { addSuffix: true });
};

//auto-scroll to bottom of messages
const messages = ref(null);
onUpdated(() => {
  if (messages.value) {
    messages.value.scrollTop = messages.value.scrollHeight;
  }
});
</script>

<template>
  <div class="chat-window">
    <div class="" v-if="error">{{ error }}</div>
    <div class="messages" v-if="documents" ref="messages">
      <div class="single" v-for="doc in documents" :key="doc.id">
        <span class="created-at">{{ formattedDate(doc.date) }}</span>
        <span class="name">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.chat-window {
  background-color: #fafafa;
  padding: 30px 20px;
}

.single {
  margin: 18px 0;
}

.created-at {
  font-size: 12px;
  color: #999;
  display: block;
  margin-bottom: 4px;
}

.name {
  font-size: 14px;
  font-weight: bold;
  display: block;
  margin-bottom: 4px;
}

.messages {
  max-height: 400px;
  overflow: auto;
}
</style>