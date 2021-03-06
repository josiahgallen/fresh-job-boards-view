var React = require('react');


module.exports = React.createClass({
	render: function() {
		return (
			<div className="jobRow">
				<hr />
				<span className="datePosted">{this.props.job.get('datePosted')}</span>
				<a href={'#details/'+this.props.job.get('_id')}><h4>{this.props.job.get('jobTitle')}</h4></a><br />
				<h6>{this.props.job.get('location')}</h6><br />
				<h6>{this.props.job.get('description')}</h6><br /><br />
				<span className="tagClass">{this.props.job.get('tags')}</span>
			</div>
		)
	}
})