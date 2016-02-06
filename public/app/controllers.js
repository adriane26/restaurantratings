////FRONT END. this is LINKED TO VIEWS ... THIS IS ANGULAR / CLIENT SIDE

var appCtrls = angular.module('RestaurantCtrls', ['RestaurantServices', 'RestaurantFilters']);


/////////// MAIN CONTROLLER: DOES SEARCHES
appCtrls.controller('MainCtrl', ['$scope', '$http', '$routeParams', 'FoodPlace', '$location', function($scope, $http, $routeParams, FoodPlace, $location) {
        //// should i define $http here??
  // console.log($routeParams)
        // $http:'mainCtrl/api/restaurants'
  $scope.searchTerm = '';
  $scope.restaurants = [];

  $scope.search = function(){
    //request object ... is already defined in my mainCtrl?? 
    var req = {
    url: '/api/restaurants/'+$scope.searchTerm,
    method: 'GET'
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
appCtrls.controller('ShowCtrl', ['$scope','$routeParams', 'FoodPlace', 'Vote', function($scope, $routeParams, FoodPlace, Vote){
  $scope.business = FoodPlace.get();
  console.log($scope.business);
  $scope.yesVote;
  $scope.noVote;
  $scope.vote;

  $scope.changeChoice = function(choice) {
  	//$scope.formData = {};
  	$scope.vote = choice;
  	console.log('My Choice', choice);
  	console.log('My vote being sent', $scope.vote);
  }

  ////////// let's add in database things here.
  $scope.addVotes = function(){

  	console.log($scope.vote);

  	Vote.save({business_id: $routeParams.id, vote: $scope.vote}, function success(data) {
  		console.log(data);
  		$scope.vote = data;
  	}, function error(data) {
  		console.log(data);
  	});

// 		Vote.save({business_id: $routeParams.id}, 
// 		function success(data){
// 			$scope.vote = data;
// 			if (value === "yes_count"){
// 				Vote.yes_count ++1;
// 			} else {
// 				if (value === "no_count"){
// 					Vote.no_count ++1;
// 				}
// 			}
// 			// 	db.products.update(
//    // { sku:  "abc123" },
//    // { $inc: { quantity: -2, "metrics.orders": 1 } }
// // )
// 	}, 
// 	function error(data){
// 		console.log(data);
// 	});

  };

  // $scope.Vote = Vote.get();
  

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