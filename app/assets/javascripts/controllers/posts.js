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

CookingRecipes.PostController = Ember.ObjectController.extend({
  actions: {
    remove: function(site) {
      var self = this;
      if (window.confirm("Are you sure you want to delete this?")) {
        site.deleteRecord();
        site.save().then(function() {
          self.transitionToRoute('index');
        });
      }
    }
  }
});
