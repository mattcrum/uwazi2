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
        templateUrl: 'app/project/newProject/newProject.html',
        controllerAs: 'vm'
        //template: '<project></project>'
      })
      .state('viewProject', {
        url: '/project/:projectId',
        controller: 'ViewProjectCtrl',
        templateUrl: 'app/project/viewProject/viewProject.html'
        //template: '<project></project>'
      })
      .state('objectiveEditor', {
        url: '/project/:projectId/objectives',
        controller: 'ObjectiveEditorCtrl',
        templateUrl: 'app/project/objectiveEditor/objectiveEditor.html',
        controllerAs: 'vm'
      })
      .state('updateEditor', {
        url: '/project/:projectId/update',
        controller: 'UpdateEditorCtrl',
        templateUrl: 'app/project/updateEditor/updateEditor.html',
        controllerAs: 'vm'
      })
      .state('uploadPhoto', {
        url: '/new-image',
        controller: 'FileUploadCtrl',
        templateUrl: 'app/project/fileUpload/newFile.html'
      });
  });
