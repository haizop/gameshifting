class ChangeSetupToCurrentState < ActiveRecord::Migration
  def change
    rename_column :game_states, :setup, :current_state
  end
end
