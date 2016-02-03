//// this is LINKED TO VIEWS ... should my http call go here?

//// CAN CREATE A MODULE FOR CONTROLLERS LIKE IN AIRPLANES OR CAN CHAIN THEM ALL TOGETHER??


//// RESTAURANT IS A CUSTOM SERVICE WE CREATED. (AIRPLANES). DO I NEED THIS?? DO I NEED RESTAURANT SERVICES?? services.js
var appCtrls = 
angular.module('RestaurantCtrls', []);
/// restaurantServices would go in []


appCtrls.controller('MainCtrl', ['$scope', '$location', '$http', 'Restaurant', function($scope, $location, $http, Restaurant) {
  
$scope.searchTerm = '';

$scope.search = function() {
  var req = {
    // url: "https://data.kingcounty.gov/resource/gkhn-e8mn",
    url: '/MainCtrl/api/restaurants',
    method: 'GET',
    params: {
      $q: $scope.searchTerm
    }
  }};

/////////// $http will go get the npm request info

$scope.restaurants = [];

$http.get(req).then(function success(res) {
  if (res.status === 200) {
    $scope.restaurants = res.data.body;
  }
  console.log(res);
}, function error(res) {
  console.log(res);
});

//// use this when i set up a clickthrough/restaurant show ?
  Restaurant.query(function success(data) {
    $scope.restaurants = data;
  }, function error(data) {
    console.log(data);
  });
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