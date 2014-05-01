CookingRecipes.PostsNewController = Ember.ObjectController.extend({  
  errors: null,
  actions: {
    save: function() {
      var self = this;
        self.content.validate().then(function() {
          self.content.save();
          self.transitionToRoute('post', self);
        },function(res) {
          self.set('errors', res );
        });              
    },
    cancel: function() {
      var self = this;
      self.content.deleteRecord();
      self.transitionToRoute('index');
    }
  }
});