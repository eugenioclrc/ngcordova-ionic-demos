// #4 Apprate
angular.module('ngcordobademo')
.config(function ($cordovaAppRateProvider) {
	document.addEventListener("deviceready", function () {
		var prefs = {
			language: 'en',
			appName: 'ngCordova demos',
			//	iosURL: '<my_app_id>',
				androidURL: 'market://details?id=<package_name>',
			//	windowsURL: 'ms-windows-store:Review?name=<...>'
		};
		$cordovaAppRateProvider.setPreferences(prefs);
	}, false);
})
.controller('ApprateController', function ($cordovaAppRate, $scope) {

	$scope.promptRating = function () {
		$cordovaAppRate.promptForRating(true).then(function (result) {
	        // success
	    });
	};
})
