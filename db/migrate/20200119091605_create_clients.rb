class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :user_name
      t.string :email
      t.string :homepage
      t.string :message
      t.string :ip
      t.string :browser
      
      t.timestamps null: false
    end
  end
end
