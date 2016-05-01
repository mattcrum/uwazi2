'use strict';

angular.module('uwazi2App')
  .controller('ViewProjectCtrl', function ($scope,$http,$stateParams) {
    $http.get('/api/projects/'+$stateParams.projectId).then(function successCallback(response) {
      $scope.project = response.data;
    }, function errorCallback(response) {
      //console.log("error:" + response);
    });
  });
