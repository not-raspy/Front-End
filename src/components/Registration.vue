<template>
  <Dialog>
    <template v-slot:buttonInscription>
      REJESTRACJA
    </template>
    <template v-slot:v-text-field>
      <v-text-field
        label="Nazwa"
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
  }
}
</script>