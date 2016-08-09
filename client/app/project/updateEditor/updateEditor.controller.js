'use strict';

angular.module('uwazi2App')
  .service("myphotos", function Myphotos(){
    var myphotos = this;
    myphotos = [];
  })
  .controller('UpdateEditorCtrl', function($scope, $http, $stateParams, $state, $uibModal, Upload, myphotos) {
    this.$http = $http;

    var vm = this;
    $scope.photosArray = []; //an array of cloudinary public_id strings


    vm.update = {};
    //vm.photos= ["default"];
    vm.updateFields = [{
      key: 'title',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Title',
        placeholder: 'Enter a short description of your status update'
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


    $scope.uploadFiles = function(file) {

      file.upload = Upload.upload({
        url: '/api/fileuploads',
        method: 'POST',
        data: {
          file: file,
          'username': $scope.username
        }, //data: "data", // Any data needed to be submitted along with the files
        file: file
      }).then(function(resp) {
        console.log('Success uploaded. Response: ' + resp.data);
        console.log(resp.data);
        vm.myphotos.push(resp.data.public_id);
        //vm.photos = resp.data;
        //$scope.photosArray.push(resp.data.public_id);
        vm.photos.push(resp.data.public_id);
        console.log("photos array is next");
        console.log(vm.photos);
      }, function(resp) {
        console.log('Error status: ' + resp.status);
      }, function(evt) {
        var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
        console.log('progress: ' + progressPercentage + '% ');
      });
    }


    $scope.addUpdate = function(data) {
      $http.post('/api/updates', {
        title: data.newUpdateTitle,
        bodyText: data.newUpdateBodyText,
        photos: vm.myphotos
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log('error' + response);
      });
    };

    vm.open = function(size) {
      console.log("vm.open photos proceeding:");
      console.log(vm.photos);
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/project/updateEditor/uploadImagesModal.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          photos: function() {
            return vm.photos;
          }
        }
      });

      modalInstance.result.then(function (photoss) {
      vm.photos = photoss;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
    };
  })
  .controller('ModalInstanceCtrl', function($scope, $uibModalInstance,myphotos,photos) {
  var modalinstance = this;

console.log("ModalInstanceCtrl photos proceeding:");
  console.log(photos);
  $scope.ok = function() {
    // $uibModalInstance.close($scope.selected.item);
    //modalinstance.photos =
    console.log("ok photos");
    console.log(modalinstance.photos);
    console.log("ok myphotos");
    modalinstance.myphotos = myphotos;
    console.log(modalinstance.myphotos);
    console.log("next item is photos in ok function");
    console.log(photos);
    $uibModalInstance.close(photos);
  };

  $scope.cancel = function() {
    $uibModalInstance.dismiss('cancel');
  };
});
