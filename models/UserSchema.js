'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaDefinition = {
  'name': String,
  'age': Number,
  'email': String,
  'interests': Array
};

var userSchema = new Schema(schemaDefinition);

module.exports = userSchema;
