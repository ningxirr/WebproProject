<template>
    <div class="container">
    <sui-menu inverted borderless>
      <img src="./assets/logo.png" width="30" height="30" class="mx-3 my-3" />
      <sui-menu-item>Contacts</sui-menu-item>
      <sui-menu-menu position="right">
        <sui-menu-item>
          <sui-icon name="user" inverted bordered color="black"/>
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>

      <br>
      <router-view />
    </div>
</template>
<script>
  import {
    defineComponent
  } from 'vue'
  export default defineComponent({
    name: 'App',
  })
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
  }
  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }
  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>