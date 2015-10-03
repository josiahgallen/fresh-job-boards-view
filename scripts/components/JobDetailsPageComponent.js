var React = require('react');
var CompanyBoxComponent = require('./CompanyBoxComponent.js');
var JobDetailsComponent = require('./JobDetailsComponent.js');

module.exports = React.createClass ({
	render: function() {
		var that = this;
		var currentJobId = this.props.jobs.cid;
		var jobFocus = this.props.jobs.find(function(job) {
			return job.cid === currentJobId;
		}, this);
		return (
			<div>
				<div className="leftColumn">
					<JobDetailsComponent jobs={jobFocus} model={that.props.job}/>
				</div>
				<CompanyBoxComponent model={this.props.company} />
			</div>
		)
	}

})
