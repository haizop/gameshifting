class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :name
      t.text :description
      t.integer :activated_dynamics, array: true

      t.timestamps null: false
    end
  end
end
