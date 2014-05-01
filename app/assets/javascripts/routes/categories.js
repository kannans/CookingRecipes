// Action:index
CookingRecipes.CategoriesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('category');
  }
});
 
// Action:show
CookingRecipes.CategoryRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('category', params.id);
  }
});


// Action:new
CookingRecipes.CategoriesNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('category');
  }
});
