class AddResultsToBarcode < ActiveRecord::Migration[5.2]
  def change
    add_column :barcodes, :name, :string
  end
end
