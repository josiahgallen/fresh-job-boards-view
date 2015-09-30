var React = require('react');
var TagsCollection = require('../collections/TagsCollection.js');

var Tags = new TagsCollection();

Tags.add({id: 1, tagName: 'javascript'});
Tags.add({id: 2, tagName: 'jquery'});
Tags.add({id: 3, tagName: 'backbone'});
Tags.add({id: 4, tagName: 'react'});
Tags.add({id: 5, tagName: 'java'});


module.exports = React.createClass({
	render: function() {
		var tagArray = this.props.job.get("tags");
		var tag = [];
		for(var i = 0; i < tagArray.length; i++){
			tag.push(Tags.findWhere({id: tagArray[i]}));
		}
		var tagForModel = tag.map(function(tagName){
			return <span key={"tag"+tagName.get("id")}>{tagName.get("tagName")}</span>
		});
		return (
			<div className="jobRow">
				<span className="datePosted">{this.props.job.get('datePosted')}</span>
				<h4>{this.props.job.get('jobTitle')}</h4><br />
				<h6>{this.props.job.get('location')}</h6><br />
				<h6>{this.props.job.get('description')}</h6><br /><br />
				{tagForModel}
			</div>
		)
	}
})