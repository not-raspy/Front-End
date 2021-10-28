<template>
  <v-app>
    <div id="mainContainer">
      <Menu @activateTheSearchEngine="activateTheSearchEngine"/>
      <component :is="selectedComponent"/>
    </div>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import Main from './components/Main.vue'
import SearchEngine from './components/SearchEngine.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Main,
    SearchEngine
  },
  data() {
    return {
      selectedComponent: Main
    }
  },
  methods: {
    activateTheSearchEngine() {
      this.selectedComponent = SearchEngine
    }
  }
}
</script>

<style lang="scss">
.v-application {
  line-height: 1;
}

.v-application ul {
  padding-left: 0px;
}

.v-application .elevation-2 {
  box-shadow: none !important;
}

.row {
  margin: 0px;
}

.v-btn--is-elevated {
  box-shadow: none;
}

.v-input__append-inner {
    display: none !important;
}

@media (orientation: portrait) {
  html, body {
    height: 100%;

    #mainContainer {
      height: 100%;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
  }
}

@media (orientation: landscape) {
  html, body {
    height: 100%;
  }

  html {
    z-index: 1;
    overflow-y: auto;

    #mainContainer {
    height: 100%;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;

    display: flex;
    flex-direction: row;
    }
  }
}
</style>