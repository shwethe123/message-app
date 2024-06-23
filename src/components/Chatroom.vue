<template>
  <!-- <div class="chat-window container"> -->
    <div class="">
    <div class="messages overflow-auto" ref="msgBox">
      <div
        class="single mb-3 p-2 rounded"
        :class="{
          'message-sent': message.isSent,
          'message-received': !message.isSent
        }"
        v-for="message in formattedMessages"
        :key="message.id"
      >
        <span class="created-at small text-muted">{{ message.create_at }}</span>
        <div v-if="!message.isSent" class="ima_dis_name d-flex align-items-center mb-1">
          <!-- <img class="image me-2" src="https://shorturl.at/bqDIP" alt="User Image"> -->
          <span class="name"><i class="bi bi-chat-right-text-fill"></i> {{ message.name }}</span>
        </div>
        <div class="user_tex">
          <span class="message">{{ message.message }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref, computed, onMounted, onUpdated, nextTick } from 'vue'
import { formatDistanceToNow } from 'date-fns'
import getUser from '@/composables/getUser'

export default {
  setup() {
    const messages = ref([]);
    const msgBox = ref(null);
    const { user } = getUser();

    const scrollToBottom = () => {
      nextTick(() => {
        if (msgBox.value) {
          msgBox.value.scrollTop = msgBox.value.scrollHeight;
        }
      });
    };

    onMounted(() => {
      db.collection("messages").orderBy("create_at").onSnapshot((snap) => {
        const results = [];
        snap.docs.forEach((doc) => {
          const document = { ...doc.data(), id: doc.id, isSent: doc.data().name === user.value.displayName };
          if (doc.data().create_at) {
            results.push(document);
          }
        });
        messages.value = results;
        scrollToBottom();
      });
    });

    onUpdated(() => {
      scrollToBottom();
    });

    const formattedMessages = computed(() => {
      return messages.value.map((msg) => {
        const formatTime = formatDistanceToNow(msg.create_at.toDate());
        return { ...msg, create_at: formatTime };
      });
    });

    return { messages, formattedMessages, msgBox };
  }
}
</script>


<style scoped>
.chat-window {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  margin-top: 0px;
}

.messages {
  max-height: 60vh;
  overflow-y: auto;
  padding-right: 10px;
}

.single {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  max-width: 60%;
  word-wrap: break-word;
}

.message-sent {
  align-self: flex-end;
  background-color: #007bff;
  color: white;
  max-width: 50%;
  border-radius: 15px 0px 35px 15px;
  margin-left: auto;
  text-align: right;
  padding: 10px;
}

.message-received {
  align-self: flex-start;
  background-color: gainsboro;
  color: black;
  max-width: 50%;
  border-radius: 0px 15px 15px 35px;
  margin-right: auto;
  text-align: left;
  padding: 10px;
}

.created-at {
  display: block;
  font-size: 0.8rem;
  color: #003459;
  margin: 0px 0px -5px 25px;
}

.name {
  font-weight: bold;
  color: #003459;
}

.bi {
  font-size: 25px;
  color: #007bff;
}

.ima_dis_name {
  display: flex;
  align-items: center;
}

.user_tex {
  margin: 5px 0px 5px 15px;
  padding: 10px;
  border-radius: 0px 10px 10px 10px;
  
}

.message-sent .user_tex {
  background-color: #007bff;
  color: white;
}

.message-received .user_tex {
  background-color: #f1f0f0;
  max-width: 50%;
  color: black;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .single {
    max-width: 80%;
  }

  .message-received {
    max-width: 80%;
  }
}
span {
}

</style>
