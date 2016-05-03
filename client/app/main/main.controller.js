'use strict';

angular.module('uwazi2App')
  .controller('MainCtrl', function ($scope,$http) {
    $http.get('/api/projects/').then(function successCallback(response) {
      $scope.project = response.data;
    }, function errorCallback(response) {
      //console.log("error:" + response);
    });
  });
