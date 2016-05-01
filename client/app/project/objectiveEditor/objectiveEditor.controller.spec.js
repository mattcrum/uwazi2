'use strict';

describe('Controller: ObjectiveEditorCtrl', function () {

  // load the controller's module
  beforeEach(module('uwazi2App'));

  var ObjectiveEditorCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ObjectiveEditorCtrl = $controller('ObjectiveEditorCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
