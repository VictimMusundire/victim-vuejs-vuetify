<template>
  <v-snackbar
      v-model="$store.state.snackBar.show"
  >
    {{ $store.state.snackBar.text }}

    <template v-slot:action="{ attrs }">
      <v-btn
          text
          v-bind="attrs"
          @click="$store.commit('dismissSnackBar')"
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar",

}
</script>

<style scoped>

</style>
