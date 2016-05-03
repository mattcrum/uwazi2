'use strict';

describe('Controller: FileUploadCtrl', function () {

  // load the controller's module
  beforeEach(module('uwazi2App.fileUpload'));

  var FileUploadCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FileUploadCtrl = $controller('FileUploadCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
