// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

app.controller('MainCtrl',function($scope,$ionicScrollDelegate,$http){
  $scope.toggleLeft = function() {
      $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.refreshNow = function() {
    $http.get('/fresh-items').success(function(freshItems){
      scope.items = freshItems;
    })
    .finally(function(){
      $scope.$broadcast('scroll.refreshComplete');
    });
  };

  var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'yes'
  };

  $scope.openBrowser1 = function () {
    cordova.InAppBrowser.open('https://www.facebook.com/pages/Jamaica-Library-Service/1485475855062867','_blank',options)
  };

    $scope.openBrowser2 = function () {
    cordova.InAppBrowser.open('https://twitter.com/JLSEmpoweringJa','_blank',options)
  };

});