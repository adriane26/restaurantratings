var restaurantServices = angular.module('RestaurantServices', ['ngResource']);

//// this will save our current restaurant object for use in different controllers /////
restaurantServices.service('FoodPlace', [ function(){

 var savedData = [];
 function set(data) {
 	if(savedData.length){
 		savedData.pop();
 	}
   savedData.push(data);
 }
 function get() {
  return savedData;
 }
 return {
  set: set,
  get: get
 }
}]);

///////// VOTE SERVICE /////////
restaurantServices.service('Vote', ['$resource', function($resource){
	return $resource('/restaurant/:id');
}]);

