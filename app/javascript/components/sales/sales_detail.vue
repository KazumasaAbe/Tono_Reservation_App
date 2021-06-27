<template>
  <v-main>
    {{ message }}
  </v-main>
</template>
 
<script>
export default {
  name: 'Sales',
  data: function () {
    return {
      message: "売上一覧"
    }
  }
}
</script>
 
<style scoped>
p {
  font-size: 2em;
}
</style>
