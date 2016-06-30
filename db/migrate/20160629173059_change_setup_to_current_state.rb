class ChangeSetupToCurrentState < ActiveRecord::Migration
  def change
    rename_column :game_states, :setup, :state
  end
end
