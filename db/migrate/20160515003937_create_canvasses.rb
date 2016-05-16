class CreateCanvasses < ActiveRecord::Migration
  def change
    create_table :canvasses do |t|
      t.string :name
      t.text :description
      t.references :user
      t.json :default_set

      t.timestamps null: false
    end
  end
end
