class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :is_private
  embed :ids
  has_one :category
 end
