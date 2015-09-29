var React = require('react');
var HeadingComponent = require('./HeadingComponent.js');
var JobTipsComponent = require('./JobTipsComponent.js');
var JobFormComponent = require('./JobFormComponent.js');
var JobRowComponent = require('./JobRowComponent.js');
var NavComponent = require('./NavComponent.js');
var CompanyBoxComponent = require('./CompanyBoxComponent.js');
var JobModel = require('../models/JobModel.js');
var CompanyBoxModel = require('../models/CompanyBoxModel.js');


module.exports = React.createClass({
	JobModel1: new JobModel(
		{
			jobTitle: 'Frontend Engineer',
			company: 'MaxPlay',
			location: 'Austin, TX',
			datePosted:  new Date().toDateString(),
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
			requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
			tags: [1,2,3,4,5]
		}),
	CompanyBoxModel1: new CompanyBoxModel(
		{
			companyName: 'MaxPlay',
			location: 'Austin, TX',
			logo: '../../images/featured-logo.jpg',
			background: '../../images/featured.jpg'
		}),
	render: function() {

		return (
			<div>
				<JobRowComponent model={this.JobModel1} />
				<CompanyBoxComponent model={this.CompanyBoxModel1} />
			</div>
		)
	}
})