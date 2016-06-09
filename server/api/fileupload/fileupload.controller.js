/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/fileuploads              ->  index
 * POST    /api/fileuploads              ->  create
 * GET     /api/fileuploads/:id          ->  show
 * PUT     /api/fileuploads/:id          ->  update
 * DELETE  /api/fileuploads/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Fileupload from './fileupload.model';
var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: 'dxqgorubl',
  api_key: '632573594347948',
  api_secret: 'CYbMFwuB61ey4tHJfSmskBqhpM0'
});



function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Fileuploads
export function index(req, res) {
  return Fileupload.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Fileupload from the DB
export function show(req, res) {
  return Fileupload.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Fileupload in the DB
export function create(req, res) {
  return Fileupload.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

function toCloudinary(file_path) {
  return cloudinary.uploader.upload(file_path);
}

//right now only updates one at a time
export function upload(req,res) {
  //console.log(req);
  return toCloudinary(req.files.file[0].path)
    .then(respondWithResult(res))
    .catch(handleError(res));

}

// Updates an existing Fileupload in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Fileupload.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Fileupload from the DB
export function destroy(req, res) {
  return Fileupload.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
