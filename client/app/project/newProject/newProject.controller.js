'use strict';

angular.module('uwazi2App')
  .controller('NewProjectCtrl', function ($http, $scope, $state) {
    $scope.message = 'Hello';
    this.$http = $http;
    // $scope.myfunc = function (){
    //   console.log("FUNCTION WORKED!");
    // }

    $scope.addProject = function (proj) {
        $http.post('/api/projects', {
  				name: proj.newProject,
  				info: proj.newProjectInfo,
  				facebookUrl: proj.newProjectFacebookUrl,
  				twitterHandle: proj.newProjectTwitterHandle,
  				summary: proj.newProjectSummary,
  				address: { city: proj.newProjectAddressCity,
  								 country: proj.newProjectAddressCountry}
    			}).then(function successCallback(response) {
            console.log(response);
            proj.id = response.data._id;
            $state.go('viewProject', {projectId: proj.id});
          }, function errorCallback(response) {
            //console.log("error:" + response);
          });
        proj.newProject = '';
  			proj.newProjectInfo = '';


      }
  });
