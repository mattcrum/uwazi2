'use strict';

angular.module('uwazi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        template: '<project></project>'
      });
  });
