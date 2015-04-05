angular.module('ngcordobademo')
.controller('MenuController', function($scope, $state){
	// Idea from http://stackoverflow.com/a/12586203/707923
	$scope.activeTab = $state.current;

	$scope.items = window.itemDemos;
})
.controller('HomeController', function () {
})

// #1 Actionsheet
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


// #2 Admob
.controller('AdmobController', function ($scope) {
	var defaultOptions = {
        bannerId: 'ca-app-pub-3007879610846367/1923378742',
        interstitialId: 'ca-app-pub-3007879610846367/3400111943',
        // adSize: 'SMART_BANNER',
        // width: integer, // valid when set adSize 'CUSTOM'
        // height: integer, // valid when set adSize 'CUSTOM'
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        // offsetTopBar: false, // avoid overlapped by status bar, for iOS7+
        bgColor: 'black', // color name, or '#RRGGBB'
        // x: integer,		// valid when set position to 0 / POS_XY
        // y: integer,		// valid when set position to 0 / POS_XY
        isTesting: false, // set to true, to receiving test ad for testing purpose
        // autoShow: true // auto show interstitial ad when loaded, set to false if prepare/show
    };
    AdMob.setOptions( defaultOptions );

    $scope.autoshow = false;
    $scope.banner = {
    	size: 'BANNER',
    	position: AdMob.AD_POSITION.BOTTOM_CENTER,
    	overlap: false,
    	offsetTopBar: false
    };

    $scope.createBanner = function () {
    	setTimeout(function (b) {
	    	AdMob.createBanner({
	    		overlap: b.overlap,
	    		offsetTopBar: b.offsetTopBar,
	    		adSize: b.size,
	    		position: b.position
	    	});
	    }, 20, $scope.banner);
    };

    $scope.removeBanner = function () {
    	AdMob.removeBanner();
    };

    $scope.prepareInterstitial = function () {
    	AdMob.prepareInterstitial({autoShow: $scope.autoshow});
    	
    };

    $scope.showInterstitial = function () {
    	AdMob.showInterstitial();
    };

})

// #3 Appavailability
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

.controller('AppversionController', function ($cordovaAppVersion, $scope) {
	$scope.versionDetail = '';
	$cordovaAppVersion.getAppVersion().then(function (version) {
        $scope.versionDetail = version;
    });
});