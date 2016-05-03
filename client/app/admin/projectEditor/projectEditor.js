'use strict';

var app = angular.module('uwazi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projectEditor', {
        url: '/admin/project/edit/:projectId',
        template: '<project-editor></project-editor>'
      });
  });
