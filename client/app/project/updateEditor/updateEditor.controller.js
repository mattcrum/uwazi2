'use strict';

angular.module('uwazi2App')
  .controller('UpdateEditorCtrl', function($scope, $http) {
      $scope.message = 'Hello';
      this.$http = $http;





        $scope.addUpdate = function(data) {
          $http.post('/api/updates', {
            title: data.newUpdateTitle,
            bodyText: data.newUpdateBodyText
          }).then(function successCallback(response) {
            console.log(response);
          }, function errorCallback(response) {
            console.log('error' + response);
          });
        };


      });
