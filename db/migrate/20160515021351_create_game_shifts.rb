class CreateGameShifts < ActiveRecord::Migration
  def change
    create_table :game_shifts do |t|
      t.references :game, index: true
      t.json :game_set
      
      t.timestamps null: false
    end
  end
end
