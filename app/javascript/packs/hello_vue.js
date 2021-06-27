import Vue from 'vue'
import Vuetify from "vuetify"; //yarn add vuetify
import "vuetify/dist/vuetify.min.css"; //yarn add  @mdi/font
import App from '../app.vue'
import router from '../router.js' //yarn add vue-router
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify); // 追加
const vuetify = new Vuetify(); // 追加

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    router,
    vuetify,
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)

  console.log(app)
})