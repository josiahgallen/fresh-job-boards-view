'use strict';

var React = require('react');
var AppComponent = require('./components/AppComponent.js');
var JobRowComponent = require('./components/JobRowComponent.js');
var FilterBoxComponent = require('./components/FilterBoxComponent.js');
var InformationBoxComponent = require('./components/InformationBoxComponent.js');
var CompanyBoxComponent = require('./components/CompanyBoxComponent.js');
var main = document.getElementById('main');

React.render(
	<div>
		<AppComponent />
		<JobRowComponent />
		<FilterBoxComponent />
		<InformationBoxComponent />
		<CompanyBoxComponent />
	</div>,
	main
	)