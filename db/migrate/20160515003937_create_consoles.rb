class CreateConsoles < ActiveRecord::Migration
  def change
    create_table :consoles do |t|
      t.string :name
      t.text :description
      t.references :user
      t.json :default_set

      t.timestamps null: false
    end
  end
end
