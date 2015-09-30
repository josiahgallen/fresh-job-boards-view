var React = require('react');
var JobRowComponent = require('./JobRowComponent.js');
var CompanyBoxModel = require('../models/CompanyBoxModel.js');
var JobModel = require('../models/JobModel.js');
var FilterBoxComponent = require('./FilterBoxComponent.js')
var CompanyBoxComponent = require('./CompanyBoxComponent.js');


module.exports = React.createClass({
	// JobModel1: new JobModel(
	// 	{
	// 		jobTitle: 'Frontend Engineer',
	// 		company: 'MaxPlay',
	// 		location: 'Austin, TX',
	// 		datePosted:  new Date().toDateString(),
	// 		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
	// 		requirements: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo',
	// 		tags: [1,2,3,4,5]
	// 	}),
	CompanyBoxModel1: new CompanyBoxModel(
		{
			companyName: 'MaxPlay',
			location: 'Austin, TX',
			logo: '../../images/featured-logo.jpg',
			background: '../../images/featured.jpg'
		}),
	render: function() {
		var jobsRow = this.props.jobs.map(function(job) {
			return (
				<JobRowComponent job={job} />
			)
		})
		return (
			<div>
				<div>
					<FilterBoxComponent />
					{jobsRow}
				</div>
				<div>
					<CompanyBoxComponent model={this.CompanyBoxModel1} />
				</div>
			</div>
		)
	}
})