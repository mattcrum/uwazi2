'use strict';

angular.module('uwazi2App')
  .controller('FileUploadCtrl', function ($scope, Upload, $timeout) {

    $scope.uploadFiles = function (file) {

           file.upload = Upload.upload({
               url: '/api/fileuploads',
               method: 'POST',
               //data: "data", // Any data needed to be submitted along with the files
               file: file
           }).then(function (resp) {
               console.log('Success!  Response: ' + resp.data);
           }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' );
        });

          //  file.upload.progress(function (evt) {
          //      // Math.min is to fix IE which reports 200% sometimes
          //      file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
          //      console.log("PostController: upload progress " + file.progress);
          //  });
           //
          //  file.upload.success(function (data, status, headers, config) {
          //      // file is uploaded successfully
          //      console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
          //  });
       }

  });
