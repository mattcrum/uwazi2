'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var fileuploadCtrlStub = {
  index: 'fileuploadCtrl.index',
  show: 'fileuploadCtrl.show',
  create: 'fileuploadCtrl.create',
  update: 'fileuploadCtrl.update',
  destroy: 'fileuploadCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var fileuploadIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './fileupload.controller': fileuploadCtrlStub
});

describe('Fileupload API Router:', function() {

  it('should return an express router instance', function() {
    fileuploadIndex.should.equal(routerStub);
  });

  describe('GET /api/fileuploads', function() {

    it('should route to fileupload.controller.index', function() {
      routerStub.get
        .withArgs('/', 'fileuploadCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/fileuploads/:id', function() {

    it('should route to fileupload.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'fileuploadCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/fileuploads', function() {

    it('should route to fileupload.controller.create', function() {
      routerStub.post
        .withArgs('/', 'fileuploadCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/fileuploads/:id', function() {

    it('should route to fileupload.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'fileuploadCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/fileuploads/:id', function() {

    it('should route to fileupload.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'fileuploadCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/fileuploads/:id', function() {

    it('should route to fileupload.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'fileuploadCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
