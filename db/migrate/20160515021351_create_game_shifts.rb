class CreateGameShifts < ActiveRecord::Migration
  def change
    create_table :game_shifts do |t|
      t.references :session, index: true
      t.json :current_gameset
      t.timestamps null: false
    end
  end
end
