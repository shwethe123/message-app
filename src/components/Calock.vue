<template>
    <div class="clock">
      {{ time }}
    </div>
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
    name: 'Clock',
    setup() {
      const time = ref(new Date().toLocaleTimeString());
  
      const updateTime = () => {
        time.value = new Date().toLocaleTimeString();
      };
  
      let timer;
  
      onMounted(() => {
        timer = setInterval(updateTime, 1000);
      });
  
      onUnmounted(() => {
        clearInterval(timer);
      });
  
      return {
        time
      };
    }
  };
  </script>
  
  <style scoped>
  .clock {
    font-size: 30px;
    text-align: center;
    animation: gradient 10s ease infinite;
    background: linear-gradient(45deg, 
      #ff0000, #ff7f00, #ffff00, #7fff00, 
      #00ff00, #00ff7f, #00ffff, #007fff, 
      #0000ff, #7f00ff, #ff00ff, #ff007f, 
      #ff0000, #ff7f00, #ffff00, #7fff00, 
      #00ff00, #00ff7f, #00ffff, #007fff, 
      #0000ff, #7f00ff, #ff00ff, #ff007f);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  </style>
  