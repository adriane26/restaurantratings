var app = angular.module('AppName', ['RestaurantCtrls','RestaurantFilters','ngRoute', 'ngAnimate', 'ui.bootstrap']);


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

$locationProvider.html5Mode(true);
}]);
