angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



    .state('tabsController.friends', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/friends.html',
        controller: 'friendsCtrl'
      }
    }
  })

  .state('tabsController.feed', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      }
    }
  })

  .state('tabsController.inbox', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/inbox.html',
        controller: 'inboxCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.profile'
      2) Using $state.go programatically:
        $state.go('tabsController.profile');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page5
      /page1/tab2/page5
  */
  .state('tabsController.profile', {
    url: '/profile/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      },
      'tab2': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController.theMessage', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/theMessage.html',
        controller: 'theMessageCtrl'
      }
    }
  })

  .state('tabsController.thePost', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/thePost.html',
        controller: 'thePostCtrl'
      }
    }
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.cr8Message'
      2) Using $state.go programatically:
        $state.go('tabsController.cr8Message');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page8
      /page1/tab2/page8
  */
  .state('tabsController.cr8Message', {
    url: '/page8',
    views: {
      'tab1': {
        templateUrl: 'templates/cr8Message.html',
        controller: 'cr8MessageCtrl'
      },
      'tab2': {
        templateUrl: 'templates/cr8Message.html',
        controller: 'cr8MessageCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page3')



});
