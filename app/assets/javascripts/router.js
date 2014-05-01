// For more information see: http://emberjs.com/guides/routing/

CookingRecipes.Router.map(function() {
 this.resource('posts', function() {
 		this.route('new'); 		
    this.resource('post', { path: ':id' });
  });
	this.resource('categories', function() {
		this.route('new'); 		
    this.resource('category', { path: ':id' });
  });
});

 