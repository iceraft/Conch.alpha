// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services','LocalStorageModule',])

.run(function($ionicPlatform, $rootScope, StorageService) {
  $rootScope.title="Feed";

  $rootScope.profiles = StorageService.getFriends();
  
  $rootScope.users = [
    {name:"Panda Gangster",id:0,date:"5 Jan 2016",email:"akipnyepanda@gmai.com",phone:"0130303030"},
    {name:"From Underthebed",id:1,date:"3 Mar 2016",email:"akipnyelamat@gmail.com",phone:"0123456789"},
    {name:"Mafia Boss",id:2,date:"6 Feb 2016",email:"akkipnyepangkat@gmail.com",phone:"0198765432"}
    ];
  //defining root variables
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
