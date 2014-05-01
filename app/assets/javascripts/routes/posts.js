// Action:index
CookingRecipes.PostsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('post');
  }
});

// Action:show
CookingRecipes.PostRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('post', params.id);
  }
});

// Action:new
CookingRecipes.PostsNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('post');
  }
});