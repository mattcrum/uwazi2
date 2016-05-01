'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var updateCtrlStub = {
  index: 'updateCtrl.index',
  show: 'updateCtrl.show',
  create: 'updateCtrl.create',
  update: 'updateCtrl.update',
  destroy: 'updateCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var updateIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './update.controller': updateCtrlStub
});

describe('Update API Router:', function() {

  it('should return an express router instance', function() {
    updateIndex.should.equal(routerStub);
  });

  describe('GET /api/updates', function() {

    it('should route to update.controller.index', function() {
      routerStub.get
        .withArgs('/', 'updateCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/updates/:id', function() {

    it('should route to update.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'updateCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/updates', function() {

    it('should route to update.controller.create', function() {
      routerStub.post
        .withArgs('/', 'updateCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/updates/:id', function() {

    it('should route to update.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'updateCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/updates/:id', function() {

    it('should route to update.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'updateCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/updates/:id', function() {

    it('should route to update.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'updateCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
