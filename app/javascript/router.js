import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home.vue'
import Login from './components/devise/login.vue'
import Sign_up from './components/devise/sign_up.vue'
import Users from './components/users/users.vue'
import Sales from './components/sales/sales_detail.vue'
import Settlement from './components/settlement/settlement.vue'
import Local_currency from './components/local_currency/local_currency.vue'
import Acceptance_switching from './components/acceptance_switching/acceptance_switching.vue'
 
Vue.use(Router)
 
export default new Router({
  
  // modeのデフォルトは「hashモード」です。
  mode: 'history',
  
  // アプリのベースURL 
  base: process.env.BASE_URL,
  
  // ルーターの設定
  routes: [
    // リアルタイム地図
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    // ログイン
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    // 新規登録
    {
      path: '/sign_up',
      name: 'Sign_up',
      component: Sign_up
    },
    // ユーザー一覧
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    // 売上一覧
    {
      path: '/sales',
      name: 'Sales',
      component: Sales
    },
    // 決済
    {
      path: '/settlement',
      name: 'Settlement',
      component: Settlement
    },
    // 地域通過
    {
      path: '/local_currency',
      name: 'Local_currency',
      component: Local_currency
    },
    // 受入可否確認
    {
      path: '/acceptance_switching',
      name: 'Acceptance_switching',
      component: Acceptance_switching
    },
  ]
})
