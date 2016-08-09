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
  datePosted: { type : Date, default: Date.now },
  dateModified: Date,
  bodyText: String,
  photos: [{photoId: String}],
  active: Boolean,
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' }
});

export default mongoose.model('Update', UpdateSchema);
