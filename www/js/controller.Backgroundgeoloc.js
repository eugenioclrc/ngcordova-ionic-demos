// #7 Background geolocation
angular.module('ngcordobademo')
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