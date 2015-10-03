var React = require('react');
var Backbone= require('backbone');
var NavComponent = require('./NavComponent.js');
var JobsListPageComponent = require('./JobsListPageComponent.js');
var JobDetailsPageComponent = require('./JobDetailsPageComponent.js');
var JobFormPageComponent = require('./JobFormPageComponent.js');
var JobsCollection = require('../collections/JobsCollection.js');
var CompanyBoxModel = require('../models/CompanyBoxModel.js');

var jobs = new JobsCollection();
jobs.fetch();
console.log(jobs);

var companyBoxModel1 = new CompanyBoxModel(
	{
		companyName: 'MaxPlay',
		location: 'Austin, TX',
		logo: '../../images/featured-logo.jpg',
		background: '../../images/featured.jpg'
	});



module.exports = React.createClass({
	getInitialState: function() {
		return {
			currentPage: 'list',
			id: null
		};
	},
	componentWillMount: function() {
		var that = this;
		var Router = Backbone.Router.extend ({
			routes: {
				'': 'list',
				'list': 'list',
				'add': 'add',
				'details/:id': 'details'
			},
			list: function() {
				that.setState({currentPage: 'list'});
			},
			add: function() {
				that.setState({currentPage: 'add'});
			},
			details: function(id) {
				that.setState({currentPage: 'details', id: id});
			}
		});
		this.router = new Router();
		Backbone.history.start();
	},
	render: function() {
		var currentPageComponent = null;

		if(this.state.currentPage === 'list') {
			currentPageComponent = <JobsListPageComponent jobs={jobs} company={companyBoxModel1} router={this.router}/>;
		} else if(this.state.currentPage === 'details') {
			var currentJobId = this.state.id;
			var jobModel = jobs.find(function(job) {
				return job.cid === currentJobId;
			}, this);
			currentPageComponent = <JobDetailsPageComponent jobs={jobs} job={jobModel} company={companyBoxModel1} />;
		} else if (this.state.currentPage === 'add') {
			currentPageComponent = <JobFormPageComponent router={this.router} jobs={jobs}/>;
		}
		return (
			<div>
				<NavComponent />
				<section>
					{currentPageComponent}
				</section>
			</div>
		)
	}
})