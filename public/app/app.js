//// app needs to be named (AppName) and then any dependencies injected. ctrls, services, ngRoute
var app = angular.module('AppName', ['RestaurantCtrls','ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'app/views/landing.html',
    controller: 'MainCtrl'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
  })
  .otherwise({
    templateUrl: 'app/views/404.html'
  });

// $locationProvider.html5Mode(false).hashPrefix('!');
//  }]);
$locationProvider.html5Mode(true);
}]);



//// does this need to be here? 
app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
        //// should i define $http here??

        // $http:'mainCtrl/api/restaurants'

}]);


// when url is just index page, render a view and use a controller (if you have a controller)

// locationProvider : anything on # doesn't get sent to server. example: adrianepurdy.com/#about just jumps down on page  without #! it will try to look page up, which doesn't exist

