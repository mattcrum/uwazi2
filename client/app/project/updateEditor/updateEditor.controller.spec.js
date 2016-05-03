'use strict';

describe('Controller: UpdateEditorCtrl', function () {

  // load the controller's module
  beforeEach(module('uwazi2App'));

  var UpdateEditorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UpdateEditorCtrl = $controller('UpdateEditorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
