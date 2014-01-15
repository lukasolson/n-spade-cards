angular.module("nSpadeCards").controller("selectCoordinateController", function (CardCombinations, $rootScope, $location, $scope) {
	$rootScope.cardCombinations = $rootScope.cardCombinations || CardCombinations;

	$scope.selectCoordinate = function (row, col) {
		$rootScope.coordinate = {row: row, col: col};
		return $location.path("/select-card");
	};

	$scope.reset = function () {
		delete $rootScope.coordinate;
		$rootScope.cardCombinations = CardCombinations;
	};
});