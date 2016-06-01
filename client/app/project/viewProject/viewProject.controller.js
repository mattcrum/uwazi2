'use strict';

angular.module('uwazi2App')
  .controller('ViewProjectCtrl', function ($scope,$http,$stateParams) {
    $scope.id = $stateParams.projectId;
    $http.get('/api/projects/'+$stateParams.projectId).then(function successCallback(response) {
      $scope.project = response.data;
    }, function errorCallback(response) {
      console.log('error'+ response);
    });
    $http.get('/api/updates/project/'+$stateParams.projectId).then(function successCallback(response) {
      $scope.updates = response.data;
    }, function errorCallback(response) {
      console.log('error'+ response);
    });
  });
