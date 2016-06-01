class CreateBoardPanels < ActiveRecord::Migration
  def change
    create_table :board_panels do |t|
      t.references :board, index: true
      t.references :panel, index: true

      t.timestamps null: false
    end
  end
end
