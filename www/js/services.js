angular.module('app.services', [])

// .factory('BlankFactory', [function(){
//
// }])
//
// .service('BlankService', [function(){
//
// }]); **formate**
.factory('StorageService', ['localStorageService','$rootScope',
	function(localStorageService, $rootScope){

	var saveFriend = function(checkIn) {
		console.log('Saving the checkins');

		var oldData = localStorageService.get('friends') || [];
		oldData.push(checkIn);
		localStorageService.set('friends', oldData);

		// Refresh $rootScope.data
		$rootScope.profiles = getFriends();

	};


	var getFriends = function() {
		console.log('Getting data');
		return localStorageService.get('friends');
	};

	var removeFriend = function(id) {
		var friends = localStorageService.get('friends') || [];

		friends.forEach(function(friend,index) {
			if (friend.id == id) {
				friends.splice(index,1);
				localStorageService.set('friends', friends);
				$rootScope.profiles = getFriends();

			}
		});

	}

	return {
		saveFriend: saveFriend,
		getFriends : getFriends,
		removeFriend : removeFriend
	};

}])
