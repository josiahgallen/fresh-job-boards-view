var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		tagName: '',
		dateAdded: '' + new Date() + ''
	}
});