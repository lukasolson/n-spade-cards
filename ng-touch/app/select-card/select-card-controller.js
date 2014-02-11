angular.module("nSpadeCards").controller("selectCardController", function ($rootScope, $location, $scope) {
	if (typeof $rootScope.cardCombinations === "undefined" || typeof $rootScope.coordinate === "undefined") {
		return $location.path("/");
	}

	$scope.cards = _.uniq(_.map($rootScope.cardCombinations, function (cardCombination) {
		return cardCombination[$rootScope.coordinate.row][$rootScope.coordinate.col];
	}));

	$scope.selectCard = function (card) {
		$rootScope.cardCombinations = _.filter($rootScope.cardCombinations, function (cardCombination) {
			return cardCombination[$rootScope.coordinate.row][$rootScope.coordinate.col] === card;
		});
		return $location.path("/select-coordinate");
	};
});