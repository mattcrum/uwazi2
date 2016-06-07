'use strict';

var app = require('../..');
import request from 'supertest';

var newFileupload;

describe('Fileupload API:', function() {

  describe('GET /api/fileuploads', function() {
    var fileuploads;

    beforeEach(function(done) {
      request(app)
        .get('/api/fileuploads')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          fileuploads = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      fileuploads.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/fileuploads', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/fileuploads')
        .send({
          name: 'New Fileupload',
          info: 'This is the brand new fileupload!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newFileupload = res.body;
          done();
        });
    });

    it('should respond with the newly created fileupload', function() {
      newFileupload.name.should.equal('New Fileupload');
      newFileupload.info.should.equal('This is the brand new fileupload!!!');
    });

  });

  describe('GET /api/fileuploads/:id', function() {
    var fileupload;

    beforeEach(function(done) {
      request(app)
        .get('/api/fileuploads/' + newFileupload._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          fileupload = res.body;
          done();
        });
    });

    afterEach(function() {
      fileupload = {};
    });

    it('should respond with the requested fileupload', function() {
      fileupload.name.should.equal('New Fileupload');
      fileupload.info.should.equal('This is the brand new fileupload!!!');
    });

  });

  describe('PUT /api/fileuploads/:id', function() {
    var updatedFileupload;

    beforeEach(function(done) {
      request(app)
        .put('/api/fileuploads/' + newFileupload._id)
        .send({
          name: 'Updated Fileupload',
          info: 'This is the updated fileupload!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedFileupload = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFileupload = {};
    });

    it('should respond with the updated fileupload', function() {
      updatedFileupload.name.should.equal('Updated Fileupload');
      updatedFileupload.info.should.equal('This is the updated fileupload!!!');
    });

  });

  describe('DELETE /api/fileuploads/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/fileuploads/' + newFileupload._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when fileupload does not exist', function(done) {
      request(app)
        .delete('/api/fileuploads/' + newFileupload._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
