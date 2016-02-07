//// app needs to be named (AppName) and then any dependencies injected. ctrls, services, ngRoute
var app = angular.module('AppName', ['RestaurantCtrls','RestaurantFilters','ngRoute', 'ngAnimate', 'ui.bootstrap']);
// var app = angular.module('AppName', ['ngRoute']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/landing.html',
    controller: 'MainCtrl'
  })
  .when('/restaurant/:id', {
    templateUrl: 'app/views/showGrade.html',
    controller: 'ShowCtrl'
  })
  .when('/about',{
    templateUrl: 'app/views/about.html'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });


// $locationProvider.html5Mode(false).hashPrefix('!');
//  }]);
$locationProvider.html5Mode(true);
}]);



// locationProvider : anything on # doesn't get sent to server. example: adrianepurdy.com/#about just jumps down on page  without #! it will try to look page up, which doesn't exist

