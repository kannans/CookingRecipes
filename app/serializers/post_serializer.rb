class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :category_id, :authur_id, :is_private
end
