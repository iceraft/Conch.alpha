angular.module('app.controllers', [])
////////////////////////////////////////////////////////////////////////////////////////////////////
.controller('friendsCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
console.log('this region is under the  friendsCtrl');
$scope.refresh =function(){
  console.log('No Hhahaha');
}
// $scope.profiles= [
//   {name:"Panda Gangster",id:0,date:"5 Jan 2016",email:"akipnyepanda@gmai.com",phone:"0130303030"},
//   ];
}])
///////////////////////////////////////////////////////////////////////////////////////////////////
.controller('feedCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
console.log('this region is under the feedCtrl');

}])
///////////////////////////////////////////////////////////////////////////////////////////////////
.controller('inboxCtrl', ['$scope', '$stateParams','StorageService','$rootScope', '$state','$ionicPopup',
function ($scope, $stateParams,StorageService,$rootScope, $state,$ionicPopup) {
console.log('this region is under the inboxCtrl');
 $scope.add = function(id){
   var confirmPopup=$ionicPopup.confirm({
     title:'Adding a friend',
     template: 'Are you sure you want to add as friend?'
   });
   confirmPopup.then(function(res){
     if(res){
       $rootScope.users.forEach(function(user){
         if (user.id == id){
           StorageService.saveFriend(user);
         }
       });
       $state.go('tabsController.friends',{},{notify:true});
     }
   });
 };
}])
///////////////////////////////////////////////////////////////////////////////////////////////////
.controller('profileCtrl', ['$scope', '$stateParams', 'StorageService','$rootScope', '$state','$ionicPopup',
function ($scope, $stateParams, StorageService, $rootScope, $state,$ionicPopup) {
console.log('this region is under the ProfileCtrl');
$rootScope.profiles.forEach(function(x) {
  if (x.id == $stateParams.id){
    $scope.data = x;
  }
})
$scope.remove =function(id){
  var confirmPopup=$ionicPopup.confirm({
    title:'Removing a friend',
    template: 'Are you sure you want to remove?'
  });
  confirmPopup.then(function(res){
    if(res){
      StorageService.removeFriend(id);
      $state.go('tabsController.friends',{},{notify:true});
    }
  });
}
}])
////////////////////////////////////////////////////////////////////////////////////////////////////
.controller('theMessageCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
console.log('this region is under theMessageCtrl');
$scope.title="The Message";
}])
/////////////////////////////////////////////////////////////////////////////////////////////////////
.controller('thePostCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
console.log('this region is under thePostCtrl');
$scope.title="The Post";
}])
/////////////////////////////////////////////////////////////////////////////////////////////////////
.controller('cr8MessageCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
console.log('this region is under the cr8MessageCtrl');

}])
