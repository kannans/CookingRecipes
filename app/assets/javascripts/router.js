// For more information see: http://emberjs.com/guides/routing/

CookingRecipes.Router.map(function() {
 this.resource('posts', function() {
    this.resource('post', { path: ':id' });
  });
	this.resource('categories', function() {
    this.resource('category', { path: ':id' });
  });
});
