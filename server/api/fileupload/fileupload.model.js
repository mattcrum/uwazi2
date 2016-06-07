'use strict';

import mongoose from 'mongoose';

var FileuploadSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  url: String
});

export default mongoose.model('Fileupload', FileuploadSchema);
