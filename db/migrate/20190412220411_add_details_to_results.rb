class AddDetailsToResults < ActiveRecord::Migration[5.2]
  def change
    add_column :results, :name, :string
    add_column :results, :image, :string
    add_column :results, :description, :string
    add_column :results, :price, :integer
  end
end
