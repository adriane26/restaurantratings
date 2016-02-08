var appFilters = angular.module('RestaurantFilters', ['RestaurantServices']);



/////// DEFINE YOUR FILTERS
appFilters.filter('graded', function(){
	return function(points) {
		// var points = business[0].inspection_score;
		if(isNaN(points)) {
			return points;
		} else {
			//// take business.violation_points and run through tiers: 
			if(points <= 20) {
				return "A";
			} else {
				if(points >= 21 && points <= 45) {
					return "B";
				} else {
					if(points >= 46 && points <= 60) {
						return "C";
					} else {
						return "F";
					}
				}
			}
		}
	}
});
