angular.module('DoughnutCtrls', ['DoughnutServices'])
.controller('DoughnutCtrl', ['$scope', '$location', 'Doughnut', function($scope, $location, Doughnut) {
  $scope.doughnuts = [];

  Doughnut.query(function success(data) {
    $scope.doughnuts = data;
  }, function error(data) {
    console.log(data);
  });
}]).controller('DoughnutShowCtrl', ['$scope','$routeParams', 'Doughnut', function($scope, $routeParams, Doughnut){
	$scope.doughnut = {};

	Doughnut.get({id: $routeParams.id}, 
		function success(data){
			$scope.doughnut = data;
	}, 
	function error(data){
		console.log(data);
	})

}]);

// route params allow us to access id from router., then custom service
// to navigate pages programatically without having to rely on clicks, use $location
// $location.path('/about'); 