// filter.js


// The syntax for using filters in Angular templates is as follows:

// {{ expression | filter }}
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


// appFilters.filter('yesOrNo', function(){
// 	return function() {
// 		if(Vote.yes_count >= Vote.no_count) {
// 			//// span id="yes" turns red
// 			document.querySelector("#yes").style.color = "red";
// 		} else {
// 			/// span id="no" turns red 
// 			document.querySelector("#no").style.color = "red";
// 		}
// 	}
// });


// //// this will filter results, modify to filter search results
// // Setup the filter
// app.filter('staticLanguage', function() {

//   // Create the return function and set the required parameter name to **input**
//   return function(input) {

//     var out = [];

//     // Using the angular.forEach method, go through the array of data and perform the operation of figuring out if the language is statically or dynamically typed.
//     angular.forEach(input, function(language) {

//       if (language.type === 'static') {
//         out.push(language)
//       }
      
//     })

//     return out;
//   }

// });