'use strict';

import mongoose from 'mongoose';

var addressSubschema = new mongoose.Schema({
  street: {type: String},
	city: {type: String},
	number: {type: String},
	zip: {type: String},
	country: {type: String}
});

var objectiveSubschema = new mongoose.Schema({
	summary: String,
	description: String,
	completionDate: Date,
  startDate: Date

});

var ProjectSchema = new mongoose.Schema({
  name: String,
	summary: String,
  description: String,
  info: String,
	owner: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
	location: {type: String },
	websiteUrl: { type: String },
	facebookUrl: { type: String },
	twitterHandle: { type: String },
  active: Boolean,
	address: addressSubschema,
	objectives: [objectiveSubschema]
});

export default mongoose.model('Project', ProjectSchema);
