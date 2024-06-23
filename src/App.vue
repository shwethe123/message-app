<template>
  <router-view/>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #ffffff;
    color: #444;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

h2 {
    color: #003459;
    text-align: center;
}

input[type="text"], input[type="email"], input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #eee;
    border-radius: 10px;
}

button {
    background: #003459;
    color: white;
    font-weight: bold;
    border: 0;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s ease;
}

button:hover {
    background: #002540;
}

.log_button {
    background: #ff232e;
    color: white;
    font-weight: bold;
    border: 0;
    border-radius: 10px;
    padding: 10px 20px;
    cursor: pointer;
    margin-top: 10px;
    transition: background 0.3s ease;
}

.log_button:hover {
    background: #e01e25;
}

.error {
    color: #ff3f80;
    font-size: 14px;
}

</style>
