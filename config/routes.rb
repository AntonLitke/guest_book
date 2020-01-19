Rails.application.routes.draw do

  root 'main#new'
  post "create_client", to: "main#create"
  resources :main, only: [:index, :new] do
  end


end
