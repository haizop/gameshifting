class CreateGameStates < ActiveRecord::Migration
  def change
    create_table :game_states do |t|
      t.references :game, index: true
      t.jsonb :setup, null: false, default: '{}'

      t.timestamps null: false
    end

    add_index  :game_states, :setup, using: :gin
  end
end
