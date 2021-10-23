<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="325px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          id="buttonPortait"
          class="button"
          v-bind="attrs"
          v-on="on"
        >
          <b>ZALOGUJ SIĘ</b>
        </v-btn>
      </template>
      <v-card id="card">
        <div id="circle">
          <img id ="logo" alt="logo" src="@/assets/logo.png">
        </div>
        <v-card-text>
          <v-container>
            <v-text-field
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              label="Hasło"
              required
            ></v-text-field>
          </v-container>
          <v-checkbox
            v-model="hover"
            label="Zapamiętaj mnie"
            hide-details
          ></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            id="buttonLogIn"
            block
            color="blue darken-1"
            @click="dialog = false"
          >
            ZALOGUJ SIĘ
          </v-btn>
        </v-card-actions>
        <div id="otherLogins">
          <span>lub zaloguj się przez</span>
          <div id="icons">
            <font-awesome :icon="['fab', 'facebook-square']"/>
            <font-awesome :icon="['fab', 'google']"/>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>

<style scoped>
#card {
  padding-top: 15.5%;
  padding-bottom: 5%;
  background-color: #ff9e4f;
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
}

#logo {
  width: 123.63px;
}

#buttonLogIn {
  color: white;
}

#otherLogins {
  display: flex;
  flex-direction: column;
  align-content: center;
}

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