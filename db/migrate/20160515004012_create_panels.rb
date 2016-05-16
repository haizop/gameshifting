class CreatePanels < ActiveRecord::Migration
  def change
    create_table :panels do |t|
      t.string :name
      t.text :description
      t.json :default_gameset

      t.timestamps null: false
    end
  end
end
