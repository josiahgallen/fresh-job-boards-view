var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<nav>
				<hr className="navHr" />
				<div className="logoWrapper">
					<div className="logo">
					</div>
					<a href="#"><strong>FRESH JOBS</strong></a>
				</div>
				<div className="links">
					<a href="#">JOBS</a>
					<a href="#">COMPANIES</a>
					<a href="#">CITIES</a>
					<a href="#">WHY FRESH?</a>
					<a href="#">FOR EMPLOYERS</a>
				</div>
			</nav>
		)
	}
})