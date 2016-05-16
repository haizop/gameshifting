class CreateSessionUsers < ActiveRecord::Migration
  def change
    create_table :session_users do |t|
      t.references :user, index: true
      t.references :session, index: true
      t.timestamps null: false
    end
  end
end
