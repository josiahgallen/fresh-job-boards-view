var React = require('react');
var JobRowComponent = require('./JobRowComponent.js');
var FilterBoxComponent = require('./FilterBoxComponent.js')
var CompanyBoxComponent = require('./CompanyBoxComponent.js');
var InformationBoxComponent = require('./InformationBoxComponent.js')


module.exports = React.createClass({
	componentWillMount: function() {
		var that = this;
		this.props.jobs.on('sync', function() {
			that.forceUpdate();
		})
	},
	render: function() {
		var jobsRows = this.props.jobs.map(function(job) {
			console.log(job);
			return (
				<JobRowComponent job={job} key={job.cid} />
			)
		})
		return (
			<div className="jobPageWrapper">
				<div className="leftColumn">
					<div>
						<FilterBoxComponent />
						{jobsRows}
					</div>
				</div>
				<InformationBoxComponent />
				<CompanyBoxComponent model={this.props.company} />
			</div>
		)
	}
})