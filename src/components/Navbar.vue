<template>
  <nav>
    <div class="nav">
      <div class="nav_bar">
          <p v-if="user">
            <i class="bi bi-person-vcard-fill"></i> : {{ user.displayName }}
          </p>
          <p class="email" v-if="user">
            <i class="bi bi-envelope-at"></i> : {{ user.email }}
          </p>
      </div>
      <div class="clock">
        <Calock></Calock>
      </div>
      <button class="log_button" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
import getUser from '@/composables/getUser';
import { auth } from '../firebase/config';
import { ref } from 'vue';
import Calock from './Calock.vue';

export default {
  components: { Calock },
  setup() {
    const error = ref(null);
    const { user } = getUser();
    const logout = async () => {
      try {
        await auth.signOut();
      } catch (err) {
        error.value = err.message;
      }
    }

    return { logout, user };
  }
}
</script>

<style scoped>
.nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

nav p {
    margin: 2px auto;
    font-weight: 500;
    font-size: 16px;
    color: #444;
}

nav p.email {
    font-size: 14px;
    color: #999;
}
/* .nav_bar {
  display: flex;
  padding: 10px;
} */
.log_button {
  margin-right: 40px;
}
.bi {
  font-size: 18px;
}
.clock {
  font-weight: 900;
}
@media (max-width: 768px) {
  .clock {
    font-size: 20px;
  }
}
</style>
