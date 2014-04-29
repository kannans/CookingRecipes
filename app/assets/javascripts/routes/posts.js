CookingRecipes.PostRoute = Ember.Route.extend({
 model: function(params) {
    return this.store.find('post', params.id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  },
});

CookingRecipes.PostsRoute = Ember.Route.extend({
 model: function(params) {
    return this.store.find('post');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
  },
});