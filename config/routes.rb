Rails.application.routes.draw do
  root 'application#index'

  namespace :v1 do
    devise_for :users
    resources :game_states
  end
end
