'use strict';

angular.module('uwazi2App')
  .controller('ObjectiveEditorCtrl', function ($scope,$http,$stateParams,$state) {
    $scope.message = 'Hello';

    this.$http = $http;
    // $scope.myfunc = function (){
    //   console.log("FUNCTION WORKED!");
    // }

    $scope.addObjective = function (obj) {
        $http.post('/api/projects/'+$stateParams.projectId, {
  				summary: obj.summary
    			}).then(function successCallback(response) {
            console.log(response);
            $state.go('viewProject', {projectId: response.data._id});
          }, function errorCallback(response) {
            console.log("error:");
            console.log(response);
          });


      }
  });
