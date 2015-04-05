// #6 App version
angular.module('ngcordobademo')
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
