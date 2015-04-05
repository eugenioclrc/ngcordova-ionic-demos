(function(){
  angular.module('ngcordobademo')
  .config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/app/home');

		$stateProvider
    .state('menu', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'MenuController'
    })
  
   
   

    for (var i = 0, e; i < window.itemDemos.length; i += 1) {
      e = window.itemDemos[i];
      var _name = e.state.split('.')[1];
      _name = _name.charAt(0).toUpperCase() + _name.slice(1);
      $stateProvider
      .state(e.state, {
        url: '/' + _name.toLowerCase(),
        views: {
          'menuContent': {
            templateUrl: 'templates/' + _name.toLowerCase() + '.html',
            controller: _name + 'Controller'
          }
        }
      });
    }
    return this;
	});
})();