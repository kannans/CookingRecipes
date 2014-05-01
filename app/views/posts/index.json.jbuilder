json.array!(@posts) do |post|
  json.extract! post, :id, :title, :body, :category_id, :authur_id, :is_private
  json.url post_url(post, format: :json)
end
