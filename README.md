# Dirty Dishes
Dirty Dishes gives you a quick, simple picture of a King County restaurant's food inspection score and what others thought of the restaurant so you can make a more informed decision on where you're about to eat. Based on the inspection score, I assigned each restaurant a letter grade: 0-20 points = A, 21-45 points = B, 46-60 = C, and 60+ = F. Keep in mind that inspection reports are snapshots of the food handling at the establishment at the time of inspection – conditions may be different when you visit. Check out the Washington State Department of Health for more information.

I built this app using a MEAN stack (MongoDB, Express, Angular and Node), bootstrap, and the Food Establishment Inspection Data API. I wanted to create this app because I would like to see a letter grading system for restaurants established in Seattle.

If you'd like to fork this repo and install the app, you'll need an app token from [data.kingcounty.gov](https://dev.socrata.com/foundry/data.kingcounty.gov/gkhn-e8mn). Just run 'npm install' to install the dependencies, create your .env with your app token, and you're good to go!

Launch it online at [dirty-dishes.herokuapp.com](http://www.dirty-dishes.herokuapp.com)