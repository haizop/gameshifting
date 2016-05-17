Rails.application.routes.draw do
  root 'application#index'

  namespace :api do
    resources :todos, only: [:create, :index, :update]
  end

  namespace :v1 do
    devise_for :users
    resources :sessions do
      resources :game_shifts, only: [:create, :index, :show]
    end
  end
end
