'use strict';

var app = require('../..');
import request from 'supertest';

var newUpdate;

describe('Update API:', function() {

  describe('GET /api/updates', function() {
    var updates;

    beforeEach(function(done) {
      request(app)
        .get('/api/updates')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          updates = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      updates.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/updates', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/updates')
        .send({
          name: 'New Update',
          info: 'This is the brand new update!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newUpdate = res.body;
          done();
        });
    });

    it('should respond with the newly created update', function() {
      newUpdate.name.should.equal('New Update');
      newUpdate.info.should.equal('This is the brand new update!!!');
    });

  });

  describe('GET /api/updates/:id', function() {
    var update;

    beforeEach(function(done) {
      request(app)
        .get('/api/updates/' + newUpdate._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          update = res.body;
          done();
        });
    });

    afterEach(function() {
      update = {};
    });

    it('should respond with the requested update', function() {
      update.name.should.equal('New Update');
      update.info.should.equal('This is the brand new update!!!');
    });

  });

  describe('PUT /api/updates/:id', function() {
    var updatedUpdate;

    beforeEach(function(done) {
      request(app)
        .put('/api/updates/' + newUpdate._id)
        .send({
          name: 'Updated Update',
          info: 'This is the updated update!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedUpdate = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedUpdate = {};
    });

    it('should respond with the updated update', function() {
      updatedUpdate.name.should.equal('Updated Update');
      updatedUpdate.info.should.equal('This is the updated update!!!');
    });

  });

  describe('DELETE /api/updates/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/updates/' + newUpdate._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when update does not exist', function(done) {
      request(app)
        .delete('/api/updates/' + newUpdate._id)
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
