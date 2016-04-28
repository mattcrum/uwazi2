'use strict';

angular.module('uwazi2App.auth', [
  'uwazi2App.constants',
  'uwazi2App.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
