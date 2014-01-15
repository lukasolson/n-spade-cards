angular.module("nSpadeCards").filter("aggregatePanel", function () {
	return function (panels) {
		if (_.uniq(panels).length === 1) return panels[0];
		return "card";
	};
});