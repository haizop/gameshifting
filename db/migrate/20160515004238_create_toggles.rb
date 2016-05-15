class CreateToggles < ActiveRecord::Migration
  def change
    create_table :toggles do |t|
      t.string :name
      t.text :description
      t.references :panel
      t.references :user

      t.timestamps null: false
    end
  end
end
