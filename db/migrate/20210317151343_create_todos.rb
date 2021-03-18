class CreateTodos < ActiveRecord::Migration[6.1]
  def change
    create_table :todos do |t|
      t.string :thing, null: false
      t.boolean :done, null: false
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
