'use strict';

import mongoose from 'mongoose';

var PhotoSubschema = new mongoose.Schema({
  name: String,
  info: String,
  url: String,
  active: Boolean,

});

var UpdateSchema = new mongoose.Schema({
  title: String,
  createdBy: String,
  datePosted: Date,
  dateModified: Date,
  bodyText: String,
  photos: [PhotoSubschema],
  active: Boolean,
});

export default mongoose.model('Update', UpdateSchema);
