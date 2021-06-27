Rails.application.routes.draw do
  devise_for :users

  # リアルタイム地図
  root 'home#index'
  # ログインページ
  get '/login', to: 'home#index'
  # アカウント作成ページ
  get '/sign_up', to: 'home#index'
  # ログアウト
  # get 'logout', to: 'home#index' ※デバイスを使用するためたぶんなし
  # ユーザー一覧
  get 'users', to: 'home#index'
  # 売上一覧
  get 'sales', to: 'home#index'
  # 決済
  get 'settlement', to: 'home#index'
  # 地域通過
  get 'local_currency', to: 'home#index'
  # 受入可否切変
  get 'acceptance_switching', to: 'home#index'
end
