Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :todo
  resources :pages
  root "pages#home"
  match '*path', to:'pages#home', via: :all
end
