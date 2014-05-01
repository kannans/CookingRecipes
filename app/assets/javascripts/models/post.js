// for more details see: http://emberjs.com/guides/models/defining-models/

CookingRecipes.Post = DS.Model.extend(Ember.Validations.Mixin, {
  title: 	   DS.attr('string'),
  body: 	   DS.attr('string'),
  authurId:  DS.attr('number'),
  isPrivate: DS.attr('boolean'),
  category:  DS.belongsTo('category', { async: true })
});

CookingRecipes.Post.reopen({
  validations: {
    title: {
      presence: true,
      length: { minimum: 5 }
    },
    body: {
      presence: true      
    }
  }
});

 