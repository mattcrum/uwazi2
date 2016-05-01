'use strict';

angular.module('uwazi2App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        template: '<project></project>'
      })
      .state('newProject', {
        url: '/project/new',
        controller: 'NewProjectCtrl',
        templateUrl: 'app/project/newProject/newProject.html'
        //template: '<project></project>'
      })
      .state('viewProject', {
        url: '/project/:projectId',
        controller: 'ViewProjectCtrl',
        templateUrl: 'app/project/viewProject/viewProject.html'
        //template: '<project></project>'
      });
  });
