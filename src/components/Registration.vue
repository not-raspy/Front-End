<template>
<div>
  <Dialog 
    @hideMenu="hideMenu" 
    @emailAndPassword="sendingData"
    >
    <template v-slot:buttonInscription>
      REJESTRACJA
    </template>
    <template v-slot:v-text-field>
      <v-text-field
        v-model="registration.name"
        label="Nazwa"
        required
      ></v-text-field>
    </template>
    <template v-slot:repeatPassword>
      <v-text-field
        v-model="registration.password_confirmation"
        type="password"
        label="Powtórz hasło"
        required
      ></v-text-field>
    </template>
    <template v-slot:action>
      zarejestruj się
    </template>
  </Dialog>
  <Announcement 
    v-if="whetherToDisplay"
    @close="closeTheMessage"
    >
    <template v-slot:content>
      <template v-if="communique.contents">
        <font-awesome id="symbol" :icon="['fas', communique.symbol]"/>
        <span class="content">{{communique.contents}}</span>
      </template>
      <v-progress-circular
        v-else
        class="content"
        indeterminate
        color="green"
      ></v-progress-circular>
    </template>
  </Announcement>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
import Announcement from './Announcement.vue'

import axios from 'axios';

export default {
  name: 'Registration',
  components: {
    Dialog,
    Announcement
  },
  data() {
    return {
      registration: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      whetherToDisplay: false,
      communique: {
        symbol: null,
        contents: null
      }
    }
  },
  methods: {
    sendingData(email, password) {
      this.registration.email = email
      this.registration.password = password

      this.whetherToDisplay = true

      axios.post("https://citygame.ga/api/auth/register", this.registration)
      .then(response => {
      if (response)
      {
        this.communique.symbol = "check-circle"
        this.communique.contents = "Utworzono konto"
      }
      })
      .catch(error => {
        this.communique.symbol = "times-circle"
        
        if (!error.response)
        {
          this.communique.contents = "Brak połączenia, spróbuj ponownie później"
        }
        else 
        {
          const status = error.response.status

          if (status == 422)
          {
            this.communique.contents = "Nieprawidłowe dane lub dany email jest zajęty"
          }
          else
          {
            this.communique.contents = error
          }
        }
      })
    },
    closeTheMessage() {
      this.communique.contents = null
      this.whetherToDisplay = false
    },
    hideMenu() {
      this.$emit('hideMenu')
    }
  }
}
</script>

<style>
#symbol {
  font-size: 45px;
}
.content {
  margin: 20px;
  text-align: center;
  line-height: 125%;
}
</style>