var React = require('react');
var CompanyBoxComponent = require('./CompanyBoxComponent.js');
var JobDetailsComponent = require('./JobDetailsComponent.js');

module.exports = React.createClass ({
	render: function() {
		return (
			<div>
				<div className="leftColumn">
					<JobDetailsComponent model={this.props.job} />
				</div>
				<CompanyBoxComponent model={this.props.company} />
			</div>
		)
	}

})
