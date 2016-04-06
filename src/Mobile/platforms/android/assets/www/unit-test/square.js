describe('DashCtrl', function() {
	var scope;
	
	beforeEach(angular.mock.module('starter.controllers'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('DashCtrl', {$scope: scope});
	}));

	it("Checks Area of Square", function () {
		var area = 10;
        expect(scope.calcSquare(area)).toEqual(100);
	});
});