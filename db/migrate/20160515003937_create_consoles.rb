class CreateConsoles < ActiveRecord::Migration
  def change
    create_table :consoles do |t|
      t.string :name
      t.text :description
      t.references :user

      t.timestamps null: false
    end
  end
end
