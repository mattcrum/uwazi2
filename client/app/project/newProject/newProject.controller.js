'use strict';

var app = angular.module('uwazi2App');
  app.controller('NewProjectCtrl', function ($http, $scope, $state) {
    $scope.message = 'Hello';
    this.$http = $http;
    var vm = this;

    vm.project = {};

    vm.projectFields = [
      {
        key: 'name',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Name',
          placeholder: 'Enter Name'
        }
      },
      {
        key: 'description',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Description',
          placeholder: 'Description'
        }
      },
      {
        key: 'twitterHandle',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Twitter Handle',
          placeholder: '@mattscottcrum'
        }
      },
      {
        key: 'facebookUrl',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Facebook URL',
          placeholder: 'http://facebook.com/matt.crum'
        }
      },
      {
        key: 'summary',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Summary',
          placeholder: 'Summary'
        }
      },
      {
          key: 'address.city',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'City',
            placeholder: 'City'
          }
        },
        {
          key: 'address.country',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'text',
            label: 'Country',
            placeholder: 'Country'
          }
      }
    ];
    vm.submit = function (proj) {
        $http.post('/api/projects', proj)
          .then(function successCallback(response) {
            console.log(response);
            proj.id = response.data._id;
            $state.go('viewProject', {projectId: proj.id});
          }, function errorCallback(response) {
            //console.log("error:" + response);
          });
        // proj.newProject = '';
        // proj.newProjectInfo = '';


      }
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
