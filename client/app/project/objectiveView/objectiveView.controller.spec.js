'use strict';

describe('Controller: ObjectiveViewCtrl', function () {

  // load the controller's module
  beforeEach(module('uwazi2App.objectiveView'));

  var ObjectiveViewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ObjectiveViewCtrl = $controller('ObjectiveViewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
