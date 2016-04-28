'use strict';

describe('Component: ProjectComponent', function () {

  // load the controller's module
  beforeEach(module('uwazi2App'));

  var ProjectComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProjectComponent = $componentController('ProjectComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
