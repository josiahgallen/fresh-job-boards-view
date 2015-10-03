var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<form className="postForm" onSubmit={this.onFormSubmit}>
				<h3>Post your Job</h3>
				<div>Title</div>
				<input ref="title" />
				<div>Company Name</div>
				<input ref="company"/>
				<div>Location</div>
				<input ref="location"/>
				<div>Description</div>
				<textarea ref="description"/>
				<div>Tags</div>
				<input ref="tags"/>
				<div>
					<button>Submit Job</button>
				</div>
			</form>
		)
	},
	onFormSubmit: function(e) {
		e.preventDefault();
		console.log(this.props.jobs);
		var newJob = this.props.jobs.create({
			jobTitle: this.refs.title.getDOMNode().value,
			company: this.refs.company.getDOMNode().value,
			location: this.refs.location.getDOMNode().value,
			description: this.refs.description.getDOMNode().value,
			tags: this.refs.tags.getDOMNode().value
		})
		console.log(this.props.jobs);
		console.log('submit');
		this.refs.title.getDOMNode().value = '';
		this.refs.company.getDOMNode().value = '';
		this.refs.location.getDOMNode().value = '';
		this.refs.description.getDOMNode().value = '';
		this.refs.tags.getDOMNode().value = '';
		this.props.router.navigate('details/'+newJob.cid, {trigger: true});
	}
})