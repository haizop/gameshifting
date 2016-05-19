class CreateCanvassPanels < ActiveRecord::Migration
  def change
    create_table :canvass_panels do |t|
      t.references :canvass, index: true
      t.references :panel, index: true
      
      t.timestamps null: false
    end
  end
end
