class AddUserToBarcode < ActiveRecord::Migration[5.2]
  def change
    add_reference :barcodes, :user, foreign_key: true
  end
end
