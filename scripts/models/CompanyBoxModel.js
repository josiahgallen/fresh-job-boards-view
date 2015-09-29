var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		id: null,
		companyName: '',
		location: '',
		logo: '',
		background: ''
	}
});