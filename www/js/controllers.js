angular.module('ngcordobademo')
.controller('MenuController', function($scope, $state){
	// Idea from http://stackoverflow.com/a/12586203/707923
	$scope.activeTab = $state.current;

	$scope.items = window.itemDemos;
});