<template>
  <v-app> 
    <Header />
    <router-view/><!-- router-viewにコンポーネントが描画される -->
    <Footer />
  </v-app>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style scoped>
</style>
