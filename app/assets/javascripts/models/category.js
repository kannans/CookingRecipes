// for more details see: http://emberjs.com/guides/models/defining-models/

CookingRecipes.Category = DS.Model.extend(Ember.Validations.Mixin, {
  name: 	DS.attr('string'),
  posts:	DS.hasMany('post', { async: true })
});



// validation
CookingRecipes.Category.reopen({
  validations: {
    name: {
      presence: true,
      length: { minimum: 5 }
    }
  }
});