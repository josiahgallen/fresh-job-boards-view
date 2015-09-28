var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<form className="postForm">
				<h3>Post your Job</h3>
				<div>Title</div>
				<input />
				<div>Company Name</div>
				<input />
				<div>Location</div>
				<input />
				<div>Description</div>
				<textarea />
				<div>Tags</div>
				<input />
				<div>
					<button>Submit Job</button>
				</div>
			</form>
		)
	}
})