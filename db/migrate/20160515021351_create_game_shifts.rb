class CreateGameShifts < ActiveRecord::Migration
  def change
    create_table :game_shifts do |t|
      t.references :game_session
      t.json :current_game
      t.timestamps null: false
    end
  end
end
