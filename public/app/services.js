// server.js
 

///// do i need this???? 
var restaurantServices = angular.module('RestaurantServices', ['ngResource']);

restaurantServices.factory('Restaurant', ['$resource', function($resource){
	return $resource('http://localhost:3000/api/airplanes/:id');
}]);
