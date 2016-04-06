describe('ChatsCtrl', function() {
	var scope;
	
	beforeEach(angular.mock.module('starter.controllers'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('ChatsCtrl', {$scope: scope});
	}));

	it("Checks Area of Rectangle", function () {
		var len = 10;
        var br = 10;
        expect(scope.calcRec(len, br)).toEqual(100);
	});
});