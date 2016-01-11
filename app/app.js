/*
 AngularJS Project
 @author Ram Potla 
*/

'use strict';
 
/*
    Main AngularJS Web application
*/

var app = angular.module('icapp', ['ngRoute']);

/*
    Configure the Routes
*/
app.config(['$routeProvider', function($routeProvider) { 
     $routeProvider
     	.when('/home',{templateUrl : 'home/home.html',controller : 'HomeCtrl'})
     	.when('/register',{
     		templateUrl : 'register/register.html',
     		controller 	:  'RegisterCtrl'
     	})
    	.otherwise({
        redirectTo: '/home'
    	});
}]);

 // // create the controller and inject Angular's $scope
 //    app.controller('HomeCtrl', function($scope) {
 //        // create a message to display in our view
 //        $scope.message = 'Everyone come and see how good I look!';
 //    });

