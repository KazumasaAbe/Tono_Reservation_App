<template>
  <v-main>
    {{ message }}
  </v-main>
</template>
 
<script>
export default {
  name: 'Login',
  data: function () {
    return {
      message: "新規登録"
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}
</style>
