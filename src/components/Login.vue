<template>
  <Dialog>
    <template v-slot:buttonInscription>
      ZALOGUJ SIĘ
    </template>
    <template v-slot:rememberMe>
      <v-checkbox
        label="Zapamiętaj mnie"
        hide-details
      ></v-checkbox>
    </template>
    <template v-slot:action>
      zaloguj się
    </template>
  </Dialog>
</template>

<script>
import Dialog from './Dialog.vue'

export default {
  name: 'Login',
  components: {
    Dialog
  }
}
</script>