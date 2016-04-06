describe('AccountCtrl', function() {
	var scope;
	
	beforeEach(angular.mock.module('starter.controllers'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('AccountCtrl', {$scope: scope});
	}));

	it("Checks Pounds to Kgs", function () {
		var pounds = 100;
        expect(scope.calcPounds(pounds)).toEqual(45);
	});
});