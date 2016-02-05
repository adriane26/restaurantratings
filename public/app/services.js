// server.js
 

var restaurantServices = angular.module('RestaurantServices', []);

restaurantServices.service('FoodPlace', [ function(){
	// return $resource('http://localhost:3000/api/airplanes/:id');
	/// previous example (doughnuts) also had "$Resource"
	//// i need to use the previously obtained restaurant list.
	// return {
	// 	restaurant: null
	// 	//// restaurant needs to grab whatever values/data related to the business id i just clicked on
	// };

	// var businessList = [];

 //  	var addBusiness = function(newObj) {
 //      businessList.push(newObj);
 //  	};

 //  	var getBusiness = function(){
 //      return businessList;
 //  	};

 //  	return {
 //    	addBusiness: addBusiness,
 //    	getBusiness: getBusiness
 //  	};
  	///// would then need to clear out businessList ... do that in a controller by FoodPlace.businessList = [] ??
 var savedData = []
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


	// return $resource('/api/restaurants/'+$scope.business_id);
}]);
