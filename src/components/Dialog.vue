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
            <!--<button @click="google">-->
            <!--<font-awesome id="google" :icon="['fab', 'google']"/>-->
            <!--</button>-->
            <button v-on:click="Google">Google</button>
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
    token: 'ya29.a0ARrdaM-mbIJWMHkXZtRUw0wx1XsIefPiMigiw-Hs5YsnATDhppN6KRJofuFaFgYWFCwyyqEfl7sy7Z7nJY8NzsfSVfvNl8VqFqfNC54si2uPaHSpobgwYT4ysUc9zGBDymAR7E5MMTviBwDjhQ7WUmTxtRukQA',
    email: null,
    password: null,
    apiresponse: null,
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

    Google: function() {

      axios.post('http://localhost:8081/api/provider/callback', {
        '_method': 'get',
        '_token' : this.token,
        '_provider' : 'google',
      }).then(response => {
        this.apiresponse = response.data
      });
      console.warn(this.apiresponse);
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
