'use strict';

var Backbone = require('backbone');
var TagsModel = require('../models/TagsModel.js');

module.exports = Backbone.Collection.extend({
	model: TagsModel
})