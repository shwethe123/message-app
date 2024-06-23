<template>
  <form @submit.prevent="handleSubmit">
    <div class="texta_area">
      <textarea 
        placeholder="Type a message and hit enter to send" 
        v-model="message"
        @keypress.enter.prevent="handleSubmit"
      ></textarea>
      <p @click="handleSubmit"><i class="bi bi-send-check-fill"></i></p>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import { timestamp } from '@/firebase/config';
import useCollection from "@/composables/useCollection";

export default {
  setup() {
    const message = ref("");
    const { user } = getUser();
    const { error, addDoc } = useCollection("messages");

    const handleSubmit = async () => {
      if (message.value.trim() === "") return;  // Prevent empty messages
      const chat = {
        message: message.value,
        name: user.value.displayName,
        create_at: timestamp()
      };
      await addDoc(chat);
      message.value = "";
    }

    return { message, handleSubmit };
  }
}
</script>

<style>
form {
    /* margin: 10px; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    
    /* align-items: center; */
    /* background-color: #003459; */
}

textarea {
    width: 100%;
    max-width: 100%;
    margin-top: 0px;
    padding:15px 5px 5px 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    font-family: inherit;
    outline: none;
    resize: none;
    background-color: rgb(245, 255, 255);
}

.texta_area {
    display: flex;
    flex-direction: row;
    color: #003459;
    user-select: none;
    align-items: center;
}

.texta_area p {
    margin-top: 18px;
    padding: 8px;
    cursor: pointer;
    color: #003459;
    /* background: #f1f0f0; */
    border-radius: 10px;
    /* box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); */
    margin-left: 10px;
}
.bi {
  font-size: 30px;
  color:#007bff;
}
</style>
