//// this is LINKED TO VIEWS ... 

//// CAN CREATE A MODULE FOR CONTROLLERS LIKE IN AIRPLANES OR CAN CHAIN THEM ALL TOGETHER??


//// RESTAURANT IS A CUSTOM SERVICE WE CREATED. (AIRPLANES). DO I NEED THIS?? DO I NEED RESTAURANT SERVICES?? services.js
var appCtrls = angular.module('RestaurantCtrls', []);
/// restaurantServices would go in []


/////////// MAIN CONTROLLER: DOES SEARCHES
appCtrls.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
        //// should i define $http here??

        // $http:'mainCtrl/api/restaurants'
  $scope.searchTerm = '';
  $scope.restaurants = [];

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
        console.log(response);
      if (response.status === 200){
        $scope.restaurants = response.data;
        console.log($scope.restaurants)
      }

    }, function error(response){
      console.log(response);
    });
    $scope.searchTerm = '';
  };
  // $scope.$watch(function(){
  //   return $scope.restaurants;
  // }, function(x, y){
  // })


// }]);







//// use this when i set up a clickthrough/restaurant show ?
  // Restaurant.query(function success(data) {
  //   $scope.restaurants = data;
  // }, function error(data) {
  //   console.log(data);
  // });
}]);







//////////// new controller starts here
appCtrls.controller('RestaurantShowCtrl', ['$scope','$routeParams', 'Restaurant', function($scope, $routeParams, Restaurant){
	$scope.restaurant = {};

	Restaurant.get({id: $routeParams.id}, 
		function success(data){
			$scope.restaurant = data;
	}, 
	function error(data){
		console.log(data);
	})

}]);

// route params allow us to access id from router., then custom service
// to navigate pages programatically without having to rely on clicks, use $location
// $location.path('/about'); 