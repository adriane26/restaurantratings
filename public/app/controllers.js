////FRONT END. this is LINKED TO VIEWS ... THIS IS ANGULAR / CLIENT SIDE


//// RESTAURANT IS A CUSTOM SERVICE WE CREATED. (AIRPLANES). DO I NEED THIS?? DO I NEED RESTAURANT SERVICES?? services.js
var appCtrls = angular.module('RestaurantCtrls', ['RestaurantServices']);


/////////// MAIN CONTROLLER: DOES SEARCHES
appCtrls.controller('MainCtrl', ['$scope', '$http', '$routeParams', 'FoodPlace', '$location', function($scope, $http, $routeParams, FoodPlace, $location) {
        //// should i define $http here??
  // console.log($routeParams)
        // $http:'mainCtrl/api/restaurants'
  $scope.searchTerm = '';
  $scope.restaurants = [];
  // $scope.Restaurant = {};
  /// in original omdb example, calling with $http. how do i reference request/express instead? 
  $scope.search = function(){
    //request object ... is already defined in my mainCtrl?? 
    var req = {
    url: '/api/restaurants/'+$scope.searchTerm,
    method: 'GET',
      // $http: 'MainCtrl/api/restaurants',
      // params: {
        // $q: $scope.searchTerm
        // omdbapi = how search term is constructed. s="slfkj" based on what api is looking for. http automatically generates the ?=
      // }
    }
    $http(req).then(function success(response){
        // console.log(response);
    if (response.status === 200){
    $scope.restaurants = response.data;
    }
        // }
        // console.log($scope.restaurants)
      

    }, function error(response){
      console.log(response);
    });
    $scope.searchTerm = '';
    //FoodPlace.set($scope.restaurants);
  };
  $scope.saveFoodPlace = function(business_info){
    FoodPlace.set(business_info)
  };

  // $scope.addToFoodPlace = function(currObj){
  //       FoodPlace.addBusiness(currObj);
  //   };
  // myService.set(yourSharedData);

//// use this when i set up a clickthrough/restaurant show ?
  // Restaurant.query(function success(data) {
  //   $scope.restaurants = data;
  // }, function error(data) {
  //   console.log(data);
  // });
}]);  /// closes MainCtrl



//// FIGURE OUT WHAT ROUTE PARAMS ARE, DO I NEED TO CHANGE TO business_id/some other id that's given by the results?? 
//////////// new controller starts here. THIS WILL DISPLAY THE EXTENDED VIEW/INFO AND THE LETTER GRADE
appCtrls.controller('ShowCtrl', ['$scope','$routeParams', 'FoodPlace', function($scope, $routeParams, FoodPlace){
  $scope.business = FoodPlace.get();
  // $scope.business = FoodPlace.getBusiness();
	// $scope.restaurant = {};
  // $routeParams.id = Restaurant.id;
  // console.log($routeParams);
  console.log($scope.business);
  // console.log($scope.Restaurant);

  // console.log($scope.restaurant);

     //// use localstorage






  // Restaurant = {
  //   id : $routeParams.id
  // };


	// Restaurant.get({id: $routeParams.id}, 
	// 	function success(data){
	// 		$scope.restaurant = data;
	// }, 
	// function error(data){
	// 	console.log(data);
	// })

}]);




// route params allow us to access id from router., then custom service
// to navigate pages programatically without having to rely on clicks, use $location
// $location.path('/about'); 