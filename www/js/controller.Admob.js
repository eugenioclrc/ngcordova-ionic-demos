// #2 Admob
angular.module('ngcordobademo')
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
