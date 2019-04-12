Rails.application.routes.draw do
 
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	mount_devise_token_auth_for 'User', at: 'auth'
	
	get '/allegro', to: 'allegro#index'
  # get '/categories', to: 'category#index'
 	resources :barcodes
  	resources :barcode_no_logins
  # resources :groups do 
  	# resources :events
  	# resources :posts
  	# resources :categories
  # end
  root 'barcodes#index', as: :authenticated_root
end
