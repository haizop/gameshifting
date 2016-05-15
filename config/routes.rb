Rails.application.routes.draw do
  root 'application#index'

  namespace :api do
    devise_for :users
    resources :todos, only: [:create, :index, :update]
  end
end
