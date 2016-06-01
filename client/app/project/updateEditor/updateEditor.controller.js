'use strict';

angular.module('uwazi2App')
  .controller('UpdateEditorCtrl', function($scope, $http, $stateParams, $state) {
      this.$http = $http;

      var vm = this;

      vm.update = {};

      vm.updateFields = [{
        key: 'title',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Title',
          placeholder: 'Enter a short description of your objective'
        }
      }, {
        key: 'bodyText',
        type: 'textarea',
        templateOptions: {
          type: 'text',
          label: 'Body',
          placeholder: 'Enter information about your project here.'
        }
      }];
      vm.submit = function(data) {
        $http.post('/api/updates/', _.merge({
            projectId: $stateParams.projectId
          }, data))
          .then(function successCallback(response) {
            console.log(response);
            console.log($stateParams.projectId);
            $state.go('viewProject', {
              projectId: $stateParams.projectId
            });
          }, function errorCallback(response) {
            console.log('error:' + response);
          });
        };





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
