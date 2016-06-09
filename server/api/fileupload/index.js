'use strict';

var express = require('express');
var app = express();
var controller = require('./fileupload.controller');

// var multer  = require('multer');
// var upload = multer({ dest: 'uploads/' });

var multiparty = require('connect-multiparty');
var upload = multiparty({
    uploadDir: 'uploads/'
});
// // Requires multiparty
// multiparty = require('connect-multiparty');
// multipartyMiddleware = multiparty();

// // Requires controller
// UserController = require('./controllers/UserController');

var router = express.Router();

///router.post('/', controller.upload);

router.get('/', controller.index);
router.get('/:id', controller.show);
//router.post('/', upload.array('images'),controller.upload);
router.post('/', upload,controller.upload);
//router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
