<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="300px"
    >
      <v-card id="card">
        <div id="content">
          <slot name="content"/>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div id="containerButton">
            <v-btn
              id="buttonOK"
              color="blue darken-1"
              @click="dialog = false, close()"
            >
              OK
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: true
  }),
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style>
#content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#containerButton {
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
}
#buttonOK {
  color: white;
}
</style>