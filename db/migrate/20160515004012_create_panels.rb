class CreatePanels < ActiveRecord::Migration
  def change
    create_table :panels do |t|
      t.string :name
      t.text :description
      t.references :console
      t.references :user

      t.timestamps null: false
    end
  end
end
