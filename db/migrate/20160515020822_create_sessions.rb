class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.references :user
      t.string :name
      t.text :description
      t.timestamps null: false
    end
  end
end
