// #5 App version
angular.module('ngcordobademo')
.controller('AppversionController', function ($cordovaAppVersion, $scope) {
	$scope.versionDetail = '';
	$cordovaAppVersion.getAppVersion().then(function (version) {
        $scope.versionDetail = version;
    });
})