'use strict';

describe('Controller: ViewProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('uwazi2App'));

  var ViewProjectCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewProjectCtrl = $controller('ViewProjectCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
