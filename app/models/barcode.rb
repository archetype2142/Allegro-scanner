class Barcode < ApplicationRecord
	belongs_to :user
	has_many :results
	validates :code, presence: true
end
