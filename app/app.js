var app = angular.module('AppName', ['DoughnutServices', 'DoughnutCtrls', 'ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'app/views/index.html',
		controller: 'DoughnutCtrl'
	}).when('/about', {
		templateUrl: 'app/views/about.html'
	}).when('/doughnuts/:id', {
		templateUrl: 'app/views/doughnutShow.html',
		controller: 'DoughnutShowCtrl'
	}).otherwise({
		templateUrl: 'app/views/404.html'
	});

	$locationProvider.html5Mode(false).hashPrefix('!');
}]);


// when url is just index page, render a view and use a controller (if you have a controller)

// locationProvider : anything on # doesn't get sent to server. example: adrianepurdy.com/#about just jumps down on page  without #! it will try to look page up, which doesn't exist


// var app = angular.module('PrioritizeTravel', ['ngRoute', 'HackathonCtrls', 'HackathonServices', 'ui.bootstrap']);

// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//   $routeProvider
//     .when(
//       '/', {
//         templateUrl: 'app/views/home.html',
//         controller: 'HomeCtrl'
//       }
//     )
//     .when(
//       '/signup', {
//         templateUrl: 'app/views/signup.html',
//         controller: 'SignupCtrl'
//       }
//     )
//     .when(
//       '/login', {
//         templateUrl: 'app/views/login.html',
//         controller: 'LoginCtrl'
//       }
//     )
//     .when(
//       '/profile', {
//         templateUrl: 'app/views/profile.html',
//         controller: 'UserCtrl'
//       }
//     )
//       .when(
//       '/deal', {
//         templateUrl: 'app/views/deal.html',
//         controller: 'DealCtrl'
//       }
//     );
//   // $locationProvider.html5Mode(true);
// }]);
