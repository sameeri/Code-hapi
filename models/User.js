'use strict';

var mongoose = require('mongoose');
var schema = require('./UserSchema');

var User = mongoose.model('User', schema);

module.exports = User;
