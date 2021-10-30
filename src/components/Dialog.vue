<template>
  <v-row
    v-resize="onResize"
    justify="center"
  >
    <v-btn
      id="buttonPortait"
      class="button"
      @click="dialog = true, hideMenu()"
    >
      <b>
        <slot name="buttonInscription"/>
      </b>
    </v-btn>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="325px"
    >
      <v-card id="card">
        <button
          id="close"
          @click="dialog = false"
        >
          <font-awesome :icon="['fas', 'times']"/>
        </button>
        <div id="circle">
          <img id ="logo" alt="logo" src="@/assets/logo.png">
        </div>
        <v-card-text>
          <v-container>
            <slot name="v-text-field"/>
            <v-text-field
              v-model="email"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              label="Hasło"
              required
            ></v-text-field>
            <slot name="repeatPassword"/>
          </v-container>
          <slot name="rememberMe"/>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            id="buttonLogIn"
            block
            color="blue darken-1"
            @click="provideTheData"
          >
            <slot name="action"/>
          </v-btn>
        </v-card-actions>
        <div id="otherLogins">
          <span>lub
            <slot name="action"/>
          przez</span>
          <div id="icons">
            <button @click="fb">
              <font-awesome :icon="['fab', 'facebook-square']"/>
            </button>
            <button @click="google">
              <font-awesome id="google" :icon="['fab', 'google']"/>
            </button>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Dialog',
  data: () => ({
    dialog: false,
    email: null,
    password: null,
    windowSize: {
      x: 0,
      y: 0
    }
  }),
  methods: {
    provideTheData() {
      this.$emit('emailAndPassword', this.email, this.password)
    },
    onResize () {
      this.windowSize = { x: window.innerWidth, y: window.innerHeight }
    },
    fb() {
      this.window("http://localhost:8081/api/facebook")
    },
    google() {
      this.window("http://localhost:8081/api/google")
    },
    window(url) {
      if (this.windowSize.x > this.windowSize.y)
      {
        window.open(
          url, 
          null, 
          "width = 600," +
          "height = 500," +
          "top=" + this.windowSize.y * 0.25 + "," +
          "left=" + this.windowSize.x * 0.345
        );
      }
      else
      {
        window.open(
          url, 
          null, 
          "width=" + this.windowSize.x + "," +
          "height=" + this.windowSize.y
        );
      }
      
      const hello = this.hello
      
      hello('google')
      .login()
      .then(
        () => {
          const authRes = hello('google').getAuthResponse()
          axios
            .get('http://127.0.0.1:8081/api/google/callback',{
                params:{
                  access_token : authRes.access_token, 
                  provider: 'google'
                }
            })
            .then((response) => {console.log(response.data.token)})})
            .catch((error) => {console.log(error.response.data)})
    },
    hideMenu() {
      this.$emit('hideMenu')
    }
  }
}
</script>

<style lang="scss">
#card {
  padding-top: 15.5%;
  padding-bottom: 5%;
  background-color: #ff9e4f;

  position: relative;
  #close {
    position: absolute;
    top: 10px;
    right: 15px;

    font-size: x-large;
  }
  #circle {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 7.5%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;
    #logo {
      width: 123.63px;
    }
  }
  #buttonLogIn {
    color: white;
  }
  #otherLogins {
    display: flex;
    flex-direction: column;
    span {
      margin-top: 10px;
      margin-bottom: 10px;
      text-align: center;
    }
    #icons {
      padding-left: 30%;
      padding-right: 30%;

      font-size: 40px;

      display: flex;
      justify-content: space-around;
    }
  }
}

@media (orientation: portrait) {
  #buttonPortait {
    padding: 1.565vw !important;

    width: 100%;
    height: 10vw !important;

    border-radius: 0px;
    justify-content: left;
    font-size: 4vw !important;
    letter-spacing: 0px;
    color: white !important;

    background-color: #ffaf5f !important;
  }
}
</style>