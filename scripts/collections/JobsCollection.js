'use strict';

var Backbone = require('backbone');
var JobModel = require('../models/JobModel.js');

module.exports = Backbone.Collection.extend({
	model: JobModel,
	url: 'http://tiyfe.herokuapp.com/collections/josiah-freshjobs'
})