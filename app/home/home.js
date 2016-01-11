'use strict';
 // create the controller and inject Angular's $scope
    app.controller('HomeCtrl', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
        $scope.name = "Ram Potla";
    });