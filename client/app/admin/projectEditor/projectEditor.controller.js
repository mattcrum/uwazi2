'use strict';
(function(){

class ProjectEditorComponent {
  constructor($scope, $http, $stateParams, $state, $sanitize) {
    this.message = 'Hello';

    $scope.loadingProject = true;
    if(!$stateParams.projectId || $stateParams.projectId === 'new') {
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
      //console.log($stateParams.params().projectId);
        $http.get('/api/projects/'+$stateParams.projectId)
            .success(function(res) {
                $scope.project = res;
                //console.log($scope.project);
                //$scope.filename = $scope.project.coverId;
                // if($scope.project.hidden !== true && $scope.project.hidden !== false) {
                //     $scope.project.hidden = false;
                // }
            })
            .error(function(res, status) {
                $scope.error = {status: status, res: res};
            })
            .finally(function() {
                $scope.loadingProject = true;
            });
  }
}
}

angular.module('uwazi2App')
  .component('projectEditor', {
    templateUrl: 'app/admin/projectEditor/projectEditor.html',
    controller: ProjectEditorComponent
  });

})();
