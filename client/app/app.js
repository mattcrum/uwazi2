'use strict';

angular.module('uwazi2App', [
  'uwazi2App.auth',
  'uwazi2App.admin',
  'uwazi2App.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngFileUpload',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'xeditable',
  'formly',
  'formlyBootstrap'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
