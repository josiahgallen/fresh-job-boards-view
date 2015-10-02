var React = require('react');
var JobFormComponent = require('./JobFormComponent.js');
var JobTipsComponent = require('./JobTipsComponent.js');

module.exports = React.createClass ({
	render: function() {
		return (
			<div className="jobTips">
				<h1>Tips for your job Posting</h1>
				<hr />
				<div><strong>Add Keywords </strong>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				</div>
				<div><strong>Use Familiar Job Titles. </strong>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				</div>
				<div><strong>Give Them Details. </strong>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				</div>
				<div><strong>Expand Your Location. </strong>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				</div>
				<div><strong>Discuss Compensation </strong>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				</div>
			</div>
		)
	}

})