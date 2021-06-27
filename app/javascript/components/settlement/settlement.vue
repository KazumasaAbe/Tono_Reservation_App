<template>
  <v-main>
    {{ message }}
  </v-main>
</template>
 
<script>
export default {
  name: 'Settlement',
  data: function () {
    return {
      message: "決済"
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}
</style>
