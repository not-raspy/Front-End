<template>
  <Dialog @hideMenu="hideMenu">
    <template v-slot:buttonInscription>
      REJESTRACJA
    </template>
    <template v-slot:v-text-field>
      <v-text-field
        label="Nazwa"
        required
      ></v-text-field>
    </template>
    <template v-slot:repeatPassword>
      <v-text-field
        label="Powtórz hasło"
        required
      ></v-text-field>
    </template>
    <template v-slot:action>
      zarejestruj się
    </template>
  </Dialog>
</template>

<script>
import Dialog from './Dialog.vue'

export default {
  name: 'Registration',
  components: {
    Dialog
  },
  methods: {
    hideMenu() {
      this.$emit('hideMenu')
    }
  }
}
</script>