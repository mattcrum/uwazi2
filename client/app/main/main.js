'use strict';

angular.module('uwazi2App')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        controller: 'MainCtrl',
        templateUrl: 'app/main/main.html'
      });
  });
