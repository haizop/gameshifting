class CreateCanvasses < ActiveRecord::Migration
  def change
    create_table :canvasses do |t|
      t.string :name
      t.text :description
      t.json :default_gameset

      t.timestamps null: false
    end
  end
end
