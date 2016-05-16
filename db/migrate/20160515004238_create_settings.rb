class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.string :name
      t.text :description
      t.references :panel, index: true

      t.timestamps null: false
    end
  end
end
