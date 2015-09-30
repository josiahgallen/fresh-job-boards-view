var React = require('react');
var NavComponent = require('./NavComponent.js');
var JobsListPageComponent = require('./JobsListPageComponent.js');
var JobsCollection = require('../collections/JobsCollection.js');

var jobs = new JobsCollection([
		{
			jobTitle: 'Hamburgler',
			company: 'McDowells',
			location: 'McGlobal',
			datePosted: new Date().toDateString(),
			description: 'Burger relocator',
			requirements: 'Must look good in black mask and striped pajamas',
			tags: [1]
		},
		{
			jobTitle: 'Grimace',
			company: 'McDowells',
			location: 'McGlobal',
			datePosted: new Date().toDateString(),
			description: 'Being Purlple',
			requirements: 'wear purlple trashbag',
			tags: [1]
		},
		{
			jobTitle: 'Mayor McCheese',
			company: 'McDowells',
			location: 'McGlobal',
			datePosted: new Date().toDateString(),
			description: 'Be Mayor',
			requirements: 'Hand out keys to the city',
			tags: [1]
		},
		{
			jobTitle: 'Ronald McDonald',
			company: 'McDowells',
			location: 'McGlobal',
			datePosted: new Date().toDateString(),
			description: 'Clown Around',
			requirements: 'Creep out parents and children',
			tags: [1]
		},
		{
			jobTitle: 'Officer Big Mac',
			company: 'McDowells',
			location: 'McGlobal',
			datePosted: new Date().toDateString(),
			description: 'Arrest Hamburgler',
			requirements: 'eat donuts inside of burgers',
			tags: [1]
		}
	]);



module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<NavComponent />
				<main>
					<JobsListPageComponent jobs={jobs} />
				</main>
			</div>
		)
	}
})