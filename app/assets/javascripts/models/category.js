// for more details see: http://emberjs.com/guides/models/defining-models/

CookingRecipes.Category = DS.Model.extend({
  name: 	DS.attr('string'),
  posts:	DS.hasMany('post', { async: true })
});
