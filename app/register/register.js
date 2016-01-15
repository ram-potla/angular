'use strict';

// Register controller
app.controller('RegisterCtrl', function($scope) {
	$scope.save = function(ngForm) {
		if (ngForm.$invalid) {
			$scope.invalidSubmitAttempt = true;
			return;
		}

		alert('business details saved!');
	}
})
