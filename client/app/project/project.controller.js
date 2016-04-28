'use strict';

(function(){

class ProjectComponent {

	constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.awesomeProjects = [];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('project');
    });
  }

  $onInit() {
    this.$http.get('/api/projects').then(response => {
      this.awesomeProjects = response.data;
      this.socket.syncUpdates('project', this.awesomeProjects);
    });
  }

  addProject() {
    if (this.newProject) {
      this.$http.post('/api/projects', {
				name: this.newProject,
				info: this.newProjectInfo,
				facebookUrl: this.newProjectFacebookUrl,
				twitterHandle: this.newProjectTwitterHandle,
				summary: this.newProjectSummary,
				address: { city: this.newProjectAddressCity,
								 country: this.newProjectAddressCountry}
			});
      this.newProject = '';
			this.newProjectInfo = '';
    }
  }

  deleteProject(project) {
    this.$http.delete('/api/projects/' + project._id);
  }
}

angular.module('uwazi2App')
  .component('project', {
		restrict: 'E',
    templateUrl: 'app/project/project.html',
    controller: ProjectComponent
  });

})();
