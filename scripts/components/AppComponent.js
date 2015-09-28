var React = require('react');
var HeadingComponent = require('./HeadingComponent.js');
var JobTipsComponent = require('./JobTipsComponent.js');
var JobFormComponent = require('./JobFormComponent.js');
var NavComponent = require('./NavComponent.js');

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<NavComponent />
				<JobFormComponent />
				<div className="mainContent">
				<HeadingComponent>
					Tips For Your Job Posting
					<hr />
				</HeadingComponent>
				<JobTipsComponent>
					<strong>Add Keywords</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit 
				</JobTipsComponent>
				<JobTipsComponent>
					<strong>Use Familiar Job Titles.</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit 
				</JobTipsComponent>
				<JobTipsComponent>
					<strong>Give Them Details.</strong>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit 
				</JobTipsComponent>
				<JobTipsComponent>
					<strong>Expand Your Location.</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit 
				</JobTipsComponent>
				<JobTipsComponent>
					<strong>Discuss Compensation.</strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit 
				</JobTipsComponent>
				</div>
			</div>
		)
	}
})