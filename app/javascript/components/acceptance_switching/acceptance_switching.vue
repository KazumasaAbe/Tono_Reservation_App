<template>
  <v-main>
    {{ message }}
  </v-main>
</template>
 
<script>
export default {
  name: 'Acceptance_switching',
  data: function () {
    return {
      message: "受入可否切替"
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}
</style>
