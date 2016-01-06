angular.module('textInput', [])
	.controller('inputController', function ($scope) {
		$scope.visible = '';
		$scope.change = function () { $scope.visible = 'visible';}
			});
	
