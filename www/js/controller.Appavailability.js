// #3 Appavailability
angular.module('ngcordobademo')
.controller('AppavailabilityController', function ($cordovaAppAvailability, $scope) {
	/*$scope.hasTwitter = false;
	$scope.hasFacebook = false;
	$scope.hasWhatsapp = false;
*/
	$cordovaAppAvailability.check('twitter://')
    .then(function() {
		$scope.hasTwitter = true;
    }, function () {
    	$scope.hasTwitter = false;
    });

	$cordovaAppAvailability.check('fb://')
    .then(function() {
		$scope.hasFacebook = true;
    }, function () {
    	$scope.hasFacebook = false;
    });

	$cordovaAppAvailability.check('whatsapp://')
    .then(function() {
		$scope.hasWhatsapp = true;
    }, function () {
    	$scope.hasWhatsapp = false;
    });
})
