class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.integer :category_id
      t.integer :authur_id
      t.boolean :is_private

      t.timestamps
    end
  end
end
