class CreateBoardStates < ActiveRecord::Migration
  def change
    create_table :board_states do |t|
      t.references :game, index: true
      t.jsonb :setup, null: false, default: '{}'

      t.timestamps null: false
    end

    add_index  :board_states, :setup, using: :gin
  end
end
