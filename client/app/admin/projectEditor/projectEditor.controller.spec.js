'use strict';

describe('Component: ProjectEditorComponent', function () {

  // load the controller's module
  beforeEach(module('uwazi2App'));

  var ProjectEditorComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ProjectEditorComponent = $componentController('ProjectEditorComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
