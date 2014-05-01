class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  embed :ids
  has_many :posts
end
