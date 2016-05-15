Rails.application.routes.draw do
  devise_for :users
  root 'application#index'

  namespace :api do
    resources :todos, only: [:create, :index, :update]
  end
end
