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




// appFilters.filter('customCurrency', function() { 

//   // Create the return function and set the required parameter name to **input**
//   // setup optional parameters for the currency symbol and location (left or right of the amount)
//   return function(input, symbol, place) {

//     // Ensure that we are working with a number
//     if(isNaN(input)) {
//       return input;
//     } else {

//       // Check if optional parameters are passed, if not, use the defaults
//       var symbol = symbol || '$';
//       var place = place === undefined ? true : place;

//       // Perform the operation to set the symbol in the right location
//       if( place === true) {
//         return symbol + input;
//       } else {
//         return input + symbol;
//       }

//     }
//     }

// });



// appFilters.filter('capitalize', function() {

//   // Create the return function and set the required parameter as well as an optional paramater
//   return function(input, char) {

//     if (isNaN(input)) {

//       // If the input data is not a number, perform the operations to capitalize the correct letter.
//       var char = char - 1 || 0;
//       var letter = input.charAt(char).toUpperCase();
//       var out = [];

//       for (var i = 0; i < input.length; i++) {

//         if (i == char) {
//           out.push(letter);
//         } else {
//           out.push(input[i]);
//         }
        
//       }

//       return out.join('');

//     } else {
//       return input;
//     }

//   }

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