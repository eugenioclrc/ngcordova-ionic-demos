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

// #4 Apprate
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


// #5 App version
.controller('AppversionController', function ($cordovaAppVersion, $scope) {
	$scope.versionDetail = '';
	$cordovaAppVersion.getAppVersion().then(function (version) {
        $scope.versionDetail = version;
    });
})

// #6 App version
.controller('BadgeController', function ($cordovaBadge, $scope) {
	$cordovaBadge.hasPermission().then(function(yes) {
    	$scope.badgePerms = true;
	}, function(no) {
    	$scope.badgePerms = false;
	});
	// icons: http://www.darshancomputing.com/android/1.5-drawables.html

	$scope.conf = {
		smallIcon: 'ic_dialog_email',
		title: 'Badge demo %d messages',
		autoClear: false
	};
	$scope.badges = '';
	$scope.icons = ['ic_dialog_email','ic_dialog_info','ic_dialog_map','ic_input_add','ic_input_delete','ic_input_get','ic_lock_idle_alarm','ic_lock_idle_charging','ic_lock_idle_lock','ic_lock_idle_low_battery','ic_lock_lock','ic_lock_power_off','ic_lock_silent_mode','ic_lock_silent_mode_off','ic_media_ff','ic_media_next','ic_media_pause','ic_media_play','ic_media_previous','ic_media_rew','ic_menu_add','ic_menu_agenda','ic_menu_always_landscape_portrait','ic_menu_call','ic_menu_camera','ic_menu_close_clear_cancel','ic_menu_compass','ic_menu_crop','ic_menu_day','ic_menu_delete','ic_menu_directions','ic_menu_edit','ic_menu_gallery','ic_menu_help','ic_menu_info_details','ic_menu_manage','ic_menu_mapmode','ic_menu_month','ic_menu_more','ic_menu_my_calendar','ic_menu_mylocation','ic_menu_myplaces','ic_menu_preferences','ic_menu_recent_history','ic_menu_report_image','ic_menu_revert','ic_menu_rotate','ic_menu_save','ic_menu_search','ic_menu_send','ic_menu_set_as','ic_menu_share','ic_menu_slideshow','ic_menu_sort_alphabetically','ic_menu_sort_by_size','ic_menu_today','ic_menu_upload','ic_menu_upload_you_tube','ic_menu_view','ic_menu_week','ic_menu_zoom','ic_notification_clear_all','ic_partial_secure','ic_popup_disk_full','ic_popup_reminder','ic_search_category_default','ic_secure','presence_away','presence_busy','presence_invisible','presence_offline','presence_online','radiobutton_off_background','radiobutton_on_background','star_big_off','star_big_on','star_off','star_on','stat_notify_call_mute','stat_notify_chat','stat_notify_error','stat_notify_missed_call','stat_notify_more','stat_notify_sdcard','stat_notify_sdcard_usb','stat_notify_sync','stat_notify_voicemail','stat_sys_data_bluetooth','stat_sys_headset','stat_sys_phone_call','stat_sys_phone_call_forward','stat_sys_phone_call_on_hold','stat_sys_speakerphone','stat_sys_warning','sym_action_call','sym_action_chat','sym_action_email','sym_call_incoming','sym_call_missed','sym_call_outgoing','sym_contact_card','sym_def_app_icon'];
	
	$scope.$watch('conf', function () {
		$cordovaBadge.configure($scope.conf);
	}, true);

	$scope.promptForPermission = function(){
		$cordovaBadge.promptForPermission();
	};

	$scope.setBadges = function (n) {
		$cordovaBadge.set(n);
	};

	$scope.getBadges = function () {
		$cordovaBadge.get()
		.then(function(n){
			$scope.badges = n;
		});
	};
	$scope.clearBadges = function(){
		$cordovaBadge.clear();
	};
        

})


// #7 Background geolocation
.controller('BackgroundgeolocController', function ($cordovaBackgroundGeolocation, $scope) {
	// options taken from https://github.com/christocracy/cordova-plugin-background-geolocation
	var options = {
        desiredAccuracy: 10,
        stationaryRadius: 20,
        distanceFilter: 30,
        notificationTitle: 'Background tracking', // <-- android only, customize the title of the notification
        notificationText: 'ENABLED', // <-- android only, customize the text of the notification
        activityType: 'AutomotiveNavigation',
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
    };

    $scope.running = true;

    // `configure` calls `start` internally
    $cordovaBackgroundGeolocation.configure(options)
    .then(
      null, // Background never resolves
      function (err) { // error callback
      	$scope.running = false;
        alert(err);
      },
      function (location) { // notify callback
      	$scope.running = true;
        $scope.locationDetails = location;
      }
    );


    $scope.stopBackgroundGeolocation = function () {
    	$cordovaBackgroundGeolocation.stop();
    	$scope.running = false;
    };
    $scope.startBackgroundGeolocation = function () {
    	$cordovaBackgroundGeolocation.start();
    	$scope.running = true;
    };
});