class CreateBarcodeNoLogins < ActiveRecord::Migration[5.2]
  def change
    create_table :barcode_no_logins do |t|
      t.string :code

      t.timestamps
    end
  end
end
