class User < ApplicationRecord
    include DeviseTokenAuth::Concerns::User

    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :validatable
    has_many :barcodes
end
