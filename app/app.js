angular.module("nSpadeCards", ["ngRoute", "ngTouch"]).config(["$routeProvider", function($routeProvider) {
	$routeProvider.when("/select-coordinate", {
		controller: "selectCoordinateController",
		templateUrl: "app/select-coordinate/select-coordinate.html"
	}).when("/select-card", {
		controller: "selectCardController",
		templateUrl: "app/select-card/select-card.html"
	}).otherwise({
		redirectTo: "/select-coordinate"
	});
}]);