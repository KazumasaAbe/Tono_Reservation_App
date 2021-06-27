<template>
  <v-main>
    {{ message }}
  </v-main>
</template>
 
<script>
export default {
  name: 'sample',
  data: function () {
    return {
      message: "sammpleです"
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}
</style>
