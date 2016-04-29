'use strict';
(function() {

  class ProjectEditorComponent {
    constructor($scope, $http, $stateParams, $state, $sanitize, socket) {
      this.message = 'Hello';
      this.awesomeProjects = [];
      this.$http = $http;
      this.projectId = $stateParams.projectId;
      this.$stateParams = $stateParams;
      this.$scope = $scope;


      $scope.loadingProject = true;
      if (!$stateParams.projectId || $stateParams.projectId === 'new') {
        $scope.project = {
          name: 'Untitled Project',
          info: undefined,
          file: null,
          content: undefined,
          hidden: false
        };
        $scope.loadingProject = false;
        $scope.newProject = true;
      } else {

        $http.get('/api/projects/' + $stateParams.projectId)
          .success(function(res) {
            $scope.project = res;
          })
          .error(function(res, status) {
            $scope.error = {
              status: status,
              res: res
            };
          })
          .finally(function() {
            $scope.loadingProject = true;
          });
      }
    }

      $onInit(){
        // this.$http.get('/api/projects/' + this.$stateParams.projectId)
        //   .success(function(res) {
        //     this.awesomeProjects = res;
        //     this.socket.syncUpdates('project', this.awesomeProjects);
        //   })
        //   .error(function(res, status) {
        //     this.$scope.error = {
        //       status: status,
        //       res: res
        //     };
        //   })
        //   .finally(function() {
        //     this.$scope.loadingProject = true;
        //   });
      }


    updateProject(data) {
      this.$http.put('/api/projects/' + this.projectId, {
        name: data
      })
      .success(function(res){
        //$scope.project.name = res;
      });
    }

  }

  angular.module('uwazi2App')
    .component('projectEditor', {
      templateUrl: 'app/admin/projectEditor/projectEditor.html',
      controller: ProjectEditorComponent
    });

})();
