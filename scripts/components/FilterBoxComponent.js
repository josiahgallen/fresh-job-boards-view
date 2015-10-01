var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<form className="filterForm">
					<div className="filterInput1">
						<div>
							Keywords
						</div>
						<input />
					</div>
					<div className="filterInput2">
						<div>
							Location
						</div>
						<div>
							<input />
						</div>
					</div>
					<div>
							<button>Search</button>
					</div>
			</form>
		)
	}
})