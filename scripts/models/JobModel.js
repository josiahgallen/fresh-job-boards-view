var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		_id: null,
		jobTitle: '',
		company: '',
		location: '',
		datePosted: new Date().toDateString(),
		description: '',
		tags: ''
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/josiah-freshjobs',
	idAttribute: '_id'
});