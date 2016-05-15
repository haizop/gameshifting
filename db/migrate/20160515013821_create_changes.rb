class CreateChanges < ActiveRecord::Migration
  def change
    create_table :changes do |t|
      t.references :session
      t.json :current_game

      t.timestamps null: false
    end
  end
end
