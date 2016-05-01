'use strict';

angular.module('uwazi2App')
  .controller('NewProjectCtrl', function ($http, $scope) {
    $scope.message = 'Hello';
    this.$http = $http;
    // $scope.myfunc = function (){
    //   console.log("FUNCTION WORKED!");
    // }

    $scope.addProject = function (proj) {
      console.log("FUNCTION WORKED!");
      //if (this.newProject) {
        $http.post('/api/projects', {
  				name: proj.newProject,
  				info: proj.newProjectInfo,
  				facebookUrl: proj.newProjectFacebookUrl,
  				twitterHandle: proj.newProjectTwitterHandle,
  				summary: proj.newProjectSummary,
  				address: { city: proj.newProjectAddressCity,
  								 country: proj.newProjectAddressCountry}
    			}).then(function successCallback(response) {
            //console.log(proj);
          }, function errorCallback(response) {
            //console.log("error:" + response);
          });
        proj.newProject = '';
  			proj.newProjectInfo = '';
      //}
    }
  });
