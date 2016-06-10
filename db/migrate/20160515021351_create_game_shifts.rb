class CreateGameShifts < ActiveRecord::Migration
  def change
    create_table :game_shifts do |t|
      t.references :game, index: true
      t.jsonb :game_state, null: false, default: '{}'

      t.timestamps null: false
    end

    add_index  :game_shifts, :game_state, using: :gin
  end
end
