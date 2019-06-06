class AddBarcodeToResults < ActiveRecord::Migration[5.2]
  def change
    add_reference :results, :barcode, foreign_key: true
  end
end
