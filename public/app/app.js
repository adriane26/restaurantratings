//// app needs to be named (AppName) and then any dependencies injected. ctrls, services, ngRoute
var app = angular.module('AppName', ['RestaurantCtrls','ngRoute']);
// var app = angular.module('AppName', ['ngRoute']);


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





/////////// MAIN CONTROLLER: DOES SEARCHES
// app.controller('MainCtrl', ['$scope', '$http','$window', function($scope, $http, $window) {
//         //// should i define $http here??

//         // $http:'mainCtrl/api/restaurants'
//   $scope.searchTerm = '';
//   $scope.restaurants = [];

//   /// in original omdb example, calling with $http. how do i reference request/express instead? 
//   $scope.search = function(){
//     //request object ... is already defined in my mainCtrl?? 
//     var req = {
//       url: '/api/restaurants/'+$scope.searchTerm,
//       method: 'GET'
//       // $http: 'MainCtrl/api/restaurants',
//       // params: {
//         // $q: $scope.searchTerm
//         // omdbapi = how search term is constructed. s="slfkj" based on what api is looking for. http automatically generates the ?=
//       // }
//     }

//     //// i shouldn't call the $http ... ?
//       $http(req).then(function success(response){
//         console.log(response);
//       if (response.status === 200){
//         $scope.restaurants = response.data;
//         console.log($scope.restaurants)
//       }

//     }, function error(response){
//       console.log(response);
//     });
//     $scope.searchTerm = '';
//   }
//   $scope.$watch(function(){
//     return $scope.restaurants;
//   }, function(x, y){
//   })


// }]);


// locationProvider : anything on # doesn't get sent to server. example: adrianepurdy.com/#about just jumps down on page  without #! it will try to look page up, which doesn't exist

