var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<nav>
				<hr className="navHr" />
				<div className="logoWrapper">
					<a href="#" className="picLink"><div className="logo">
					</div></a>
					<a href="#"><strong>FRESH JOBS</strong></a>
				</div>
				<div className="links">
					<a href="#list">JOBS</a>
					<a href="#details/:id">COMPANIES</a>
					<a href="#">CITIES</a>
					<a href="#">WHY FRESH?</a>
					<a href="#add">FOR EMPLOYERS</a>
				</div>
			</nav>
		)
	}
})