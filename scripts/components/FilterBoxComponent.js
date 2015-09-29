var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<form className="filterForm">
					<div>
						<div>
							Keywords
						</div>
						<input />
					</div>
					<div>
						<div>
							Location
						</div>
						<input />
						<button>Search</button>
					</div>
			</form>
		)
	}
})