<template>
  <v-main>
    {{ message }}
  </v-main>
</template>
 
<script>
export default {
  name: 'home',
  data: function () {
    return {
      message: "ホームです"
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}
</style>
