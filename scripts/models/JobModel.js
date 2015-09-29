var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		jobTitle: '',
		company: '',
		location: '',
		datePosted: '',
		description: '',
		requirements: '',
		tags: []
	}
});