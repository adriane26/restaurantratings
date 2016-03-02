var appFilters = angular.module('RestaurantFilters', ['RestaurantServices']);

	appFilters.filter('graded', function(){
    return function(points){
      switch (true){
        case points <= 20:
     	    return "A";
          break;    
        case points <= 45:
          return "B";
          break;
        case points <= 60:
          return "C";
          break;
        default:
          return "F";
      }
    }
  });


