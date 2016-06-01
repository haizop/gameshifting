class CreatePanelDynamics < ActiveRecord::Migration
  def change
    create_table :panel_dynamics do |t|
      t.references :panel, index: true
      t.references :dynamic, index: true

      t.timestamps null: false
    end
  end
end
