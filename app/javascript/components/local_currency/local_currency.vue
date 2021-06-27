<template>
  <v-main>
    {{ message }}
  </v-main>
</template>
 
<script>
export default {
  name: 'Local_currency',
  data: function () {
    return {
      message: "地域通過"
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}
</style>
