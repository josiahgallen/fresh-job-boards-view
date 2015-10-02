var React = require('react');
var JobFormComponent = require('./JobFormComponent.js');
var JobTipsComponent = require('./JobTipsComponent.js');

module.exports = React.createClass ({
	render: function() {
		return (
			<div>
				<div className="leftColumn" >
					<JobFormComponent />
				</div>
				<div className="rightColumn">
					<JobTipsComponent />
				</div>
			</div>
		)
	}

})
