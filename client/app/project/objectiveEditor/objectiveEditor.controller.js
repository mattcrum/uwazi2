'use strict';

var app = angular.module('uwazi2App');

app.run(function(formlyConfig) {
  function camelize(string) {
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.replace(/^([A-Z])/, function(match, chr) {
      return chr ? chr.toLowerCase() : '';
    });
  }
  var attributes = [
    'date-disabled',
    'custom-class',
    'show-weeks',
    'starting-day',
    'init-date',
    'min-mode',
    'max-mode',
    'format-day',
    'format-month',
    'format-year',
    'format-day-header',
    'format-day-title',
    'format-month-title',
    'year-range',
    'shortcut-propagation',
    'datepicker-popup',
    'show-button-bar',
    'current-text',
    'clear-text',
    'close-text',
    'close-on-date-selection',
    'datepicker-append-to-body'
  ];

  var bindings = [
    'datepicker-mode',
    'min-date',
    'max-date'
  ];

  var ngModelAttrs = {};

  angular.forEach(attributes, function(attr) {
    ngModelAttrs[camelize(attr)] = {attribute: attr};
  });

  angular.forEach(bindings, function(binding) {
    ngModelAttrs[camelize(binding)] = {bound: binding};
  });

  console.log(ngModelAttrs);

  formlyConfig.setType({
    name: 'datepicker',
    templateUrl:  'datepicker.html',
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
      ngModelAttrs: ngModelAttrs,
      templateOptions: {
        datepickerOptions: {
          format: 'MM.dd.yyyy',
          initDate: new Date()
        }
      }
    },
    controller: ['$scope', function ($scope) {
      $scope.datepicker = {};

      $scope.datepicker.opened = false;

      $scope.datepicker.open = function () {
        $scope.datepicker.opened = !$scope.datepicker.opened;
      };
    }]
  });


});


  app.controller('ObjectiveEditorCtrl', function ($scope,$http,$stateParams,$state) {
    $scope.message = 'Hello';

    this.$http = $http;
    var vm = this;

    vm.objective = {};

    vm.objectiveFields = [
      {
        key: 'summary',
        type: 'input',
        templateOptions: {
          type: 'text',
          label: 'Summary',
          placeholder: 'Enter a short description of your objective'
        }
      },
      {
        key: 'description',
        type: 'textarea',
        templateOptions: {
          type: 'text',
          label: 'Description',
          placeholder: 'Description'
        }
      },
      {
        key: 'startDate',
        type: 'datepicker',
        templateOptions: {
          label: 'Estimated Objective Start Date',
          type: 'text',
          datepickerPopup: 'dd-MMMM-yyyy',
          //this houdl override datepicker format on formlyConfig and it did
          datepickerOptions: {
            format: 'dd-MMMM-yyyy'
          }
        }
      },
        {
          key: 'completionDate',
          type: 'datepicker',
          templateOptions: {
            label: 'Estimated Objective Completion Date',
            type: 'text',
            datepickerPopup: 'dd-MMMM-yyyy',
            //this houdl override datepicker format on formlyConfig and it did
            datepickerOptions: {
              format: 'dd-MMMM-yyyy'
            }
          }
        }
    ];
    vm.submit = function (proj) {
        $http.post('/api/projects/'+$stateParams.projectId, proj)
          .then(function successCallback(response) {
            console.log(response);
            proj.id = response.data._id;
            $state.go('viewProject', {projectId: proj.id});
          }, function errorCallback(response) {
            console.log('error:' + response);
          });
      };
    $scope.addObjective = function (obj) {
        $http.post('/api/projects/'+$stateParams.projectId, {
  				summary: obj.summary
    			}).then(function successCallback(response) {
            console.log(response);
            $state.go('viewProject', {projectId: response.data._id});
          }, function errorCallback(response) {
            console.log('error');
            console.log(response);
          });


      };
  });
