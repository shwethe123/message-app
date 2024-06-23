<template>
  <div class="container">
    <Navbar></Navbar>
    <Chatroom></Chatroom>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import { watch } from 'vue'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'
import NewChatForm from '@/components/NewChatForm.vue'
import Chatroom from '@/components/Chatroom.vue'

export default {
  components: { Navbar, NewChatForm, Chatroom },
  setup() {
    const { user } = getUser();
    const router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });

    return {};
  }
}
</script>

<style>
/* Add your styles here */
</style>
