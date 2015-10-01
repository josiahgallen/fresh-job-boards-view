var React = require('react');

module.exports = React.createClass({
	render: function() {
		var backgroundPhoto={backgroundImage: 'url('+this.props.model.get('background')+')'}
		return (
			<div className="rightColumn">
				<div className="companyInfo">
					<h1>Company Information</h1>
					<hr />
					<div className="picContainer">
					<div className="picture" style={backgroundPhoto}>
					<img className="logo" src={this.props.model.get('logo')} />
					</div>
					</div>
					<div><h1 className="companyName">{this.props.model.get('companyName')}</h1></div>
					<h2>{this.props.model.get('location')}</h2>
				</div>
			</div>
		)
	}
})