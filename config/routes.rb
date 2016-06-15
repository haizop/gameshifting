Rails.application.routes.draw do
  root 'application#index'

  namespace :v1 do
    devise_for :users
    resources :games do
      resources :game_states, only: [:create, :index, :show]
    end
  end
end
