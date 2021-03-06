var React = require('react');

module.exports = React.createClass ({
	render: function() {
		return (
			<div className="jobDetailsPageWrapper">
				<h1>{this.props.model.get('jobTitle')}</h1>
				<h6>{this.props.model.get('company')} {this.props.model.get('location')}</h6>
				<span className="tagClass">{this.props.model.get('tags')}</span>
				<h2>Job Description</h2><hr />
				<p>
					{this.props.model.get('description')}
				</p>
				<h4>What you must have:</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		)
		
	}

})