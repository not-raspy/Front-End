<template>
    <div id="containerMenu">
      <div id="profile">
        <img alt="avatar" src="@/assets/avatar.png">
      </div>
      <v-app-bar-nav-icon
        id="buttonMenu"
        @click = "menuStatusChange">
      </v-app-bar-nav-icon>
      <ul id="menu" :class="currentMenuStatus">
        <li>
          <v-btn class="button" :class="currentMenuStatus"
                  block
                  elevation="2"
                  x-large>
                  <b>SZUKAJ LODA</b>
          </v-btn>
        </li>
        <li>
          <v-btn class="button" :class="currentMenuStatus"
                  block
                  elevation="2"
                  x-large>
                  <b>ZALOGUJ SIĘ</b>
          </v-btn>
        </li>
        <li>
          <v-btn class="button" :class="currentMenuStatus"
                  block
                  elevation="2"
                  x-large>
                  <b>REJESTRACJA</b>
          </v-btn>
        </li>
      </ul>
      <center>Robert Klinger i Krzysztof Picur © 2021 prawa zastrzeżone</center>
    </div>
</template>

<script>
export default{
  name: 'Menu',
  data() {
    return {
      currentMenuStatus: localStorage.getItem('menu')
    }
  },
  methods: {
    menuStatusChange() {
      const stored = localStorage.getItem('menu')
      if (stored == '')
      {
        localStorage.setItem('menu', 'show')
        this.currentMenuStatus = localStorage.getItem('menu')
      }
      else
      {
        localStorage.setItem('menu', '')
        this.currentMenuStatus = localStorage.getItem('menu')
      }
    }
  }
}
</script>

<style scoped>
@import './MenuP.css';

@media (orientation: landscape) {
  #containerMenu {
    width: 15.6%;
    background-color: #ff9e4f;
    position: relative;
  }

  #profile {
    margin: 1.3vw auto 1.3vw;

    width: 13vw;
    height: 13vw;

    border-radius: 50%;
    background-color: #ffcf7f;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 4.15vw;
  }

  #buttonMenu {
    display: none;
  }

  ul {
    list-style-type: none;
  }

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
    box-shadow: none;
  }

  .button:hover {
    background-color: #ee8d3e !important;
  }

  center {
    position: absolute;
    bottom: .75vw;

    font-size: 0.8vw;
    line-height: 125%;
    justify-content: center;
  }
}
</style>
