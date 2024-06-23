<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" placeholder="Email" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <div v-if="error" class="error">{{ error }}</div>
      <button>Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useLogin from "../composables/useLogin";
  
  export default {
    emits: ["enterChatroom"],
    setup(props, context) {
      const email = ref("");
      const password = ref("");
      const { error, signIn } = useLogin();
  
      const login = async () => {
        const res = await signIn(email.value, password.value);
        if (res) {
          context.emit("enterChatroom");
        }
      }
  
      return { email, password, login, error };
    }
  }
  </script>
  
  <style>
  .welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 90%;
    padding: 10px;
    border-radius: 12px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}

.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    color: #003459;
}

.welcome button {
    margin: 20px auto;
}

  </style>
  