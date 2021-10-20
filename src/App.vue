<template>
  <div id="mainContainer">
    <Menu class="menu"/>
    <Main class="main"/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Main
  }
}
</script>

<style>
html, body {
   height: 100%;
}

#mainContainer {
  height: 100%;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;

  display: flex;
  flex-direction: row;
}
</style>
