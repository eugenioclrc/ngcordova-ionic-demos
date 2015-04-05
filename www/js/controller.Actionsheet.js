
// #1 Actionsheet
angular.module('ngcordobademo')
.controller('ActionsheetController', function ($scope, $cordovaActionSheet, $ionicActionSheet) {
	$scope.showIonic = function() {
		// Show the action sheet
		var hideSheet = $ionicActionSheet.show({
			buttons: [
				{ text: '<b>Share</b> This' },
				{ text: 'Move' }
			],
			destructiveText: 'Delete',
			titleText: 'Modify your album',
			cancelText: 'Cancel',
			cancel: function() {},
			buttonClicked: function(index) {
				alert('Selected button: ' + index);
				return true;
			},
			destructiveButtonClicked: function(){
				alert('delete button');
				return true;
			}
		});

		// For example's sake, hide the sheet after two seconds
		/*$timeout(function() {
			hideSheet();
		}, 2000);*/
	};

	$scope.showNative = function() {
		$cordovaActionSheet.show({
			title: 'Modify your album',
			buttonLabels: ['Share This', 'Move'],
			addCancelButtonWithLabel: 'Cancel',
			androidEnableCancelButton : true,
			winphoneEnableCancelButton : true,
			addDestructiveButtonWithLabel : 'Delete it'
		})
    	.then(function(btnIndex) {
			var index = btnIndex;
			alert('Selected button: ' + index);
		});
  	};
})
