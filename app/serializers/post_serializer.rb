class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body,  :authur_id, :is_private
  embed :ids
  has_one :category
 end
