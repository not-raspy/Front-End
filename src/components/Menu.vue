<template>
  <div id="containerMenu">
    <div id="profile">
      <img alt="avatar" src="@/assets/avatar.png">
    </div>
    <v-app-bar-nav-icon
      id="buttonMenu"
      @click = "menuStatusChange">
    </v-app-bar-nav-icon>
    <ul :class="currentMenuStatus">
      <li>
        <v-btn
          class="button"
          @click="menuStatusChange(), event()"
        >
          <b>SZUKAJ LODA</b>
        </v-btn>
      </li>
      <li>
        <Login @hideMenu="menuStatusChange"/>
      </li>
      <li>
        <Registration @hideMenu="menuStatusChange"/>
      </li>
    </ul>
    <center>Robert Klinger i Krzysztof Picur © 2021 prawa zastrzeżone</center>
  </div>
</template>

<script>
import Login from './Login.vue'
import Registration from './Registration.vue'

export default{
  name: 'Menu',
  components: {
    Login,
    Registration
  },
  data() {
    return {
      menu: false,
      currentMenuStatus: null
    }
  },
  methods: {
    menuStatusChange() {
      if (this.menu)
      {
        this.menu = false,
        this.currentMenuStatus = 'show'
      }
      else
      {
        this.menu = true,
        this.currentMenuStatus = null
      }
    },
    event() {
      this.$emit('activateTheSearchEngine')
    }
  }
}
</script>

<style lang="scss">
@import './MenuP.scss';

@media (orientation: landscape) {
  #containerMenu {
    width: 15.6%;
    background-color: #ff9e4f;
    position: relative;
    #profile {
      margin: 1.3vw auto 1.3vw;

      width: 13vw;
      height: 13vw;

      border-radius: 50%;
      background-color: #ffcf7f;

      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 4.15vw;
      }
    }
    #buttonMenu {
      display: none;
    }
    ul {
      list-style-type: none;
      .button {
        padding: 1.565vw !important;

        width: 100%;
        height: 3.15vw !important;

        border-radius: 0px;
        justify-content: left;
        font-size: 1.565vw !important;
        letter-spacing: 0px;
        color: white !important;

        background-color: #ff9e4f !important;
      }
      .button:hover {
        background-color: #ee8d3e !important;
      }
    }
    center {
      position: absolute;
      bottom: .75vw;

      font-size: 0.8vw;
      line-height: 125%;
      justify-content: center;
    }
  }
}
</style>