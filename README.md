# VodafoneTest
Vodafone Frontend Technical Test

## Run Instructions ##

Clone repo into your web dir and point the web root to the __app/__ folder. 

For production builds. Run __npm install__ from root, then run __grunt build__. The web root should then be changed to __dist/__

For unit testing, make sure you have first ran the __npm install__, then run __grunt test__

I have provided just some basic unit tests over the controller and a filter. The page is responsive using the bootstrap grid and also uses the AngularJS framework. I also use underscore to simplify some array routines. The site is compatible down to IE8 using polyfills. 