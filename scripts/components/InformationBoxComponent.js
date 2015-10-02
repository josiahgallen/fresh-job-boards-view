var React = require('react');

module.exports = React.createClass({
    render: function() {
        return ( 
            <div className = "rightColumn">
                <div className="infoBox">
                    <h2>Looking for a job?</h2><hr />
                    <div>
                        Create a Fresh Jobs profile and
                        <strong> let employers come to you</strong> 
                    </div>
                    <ul>
                        <li>
                            Employers search our database and contact you 
                        </li>
                        <li>
                            Import easily from LinkedIn </li> 
                        <li>
                            Link to Stack Overflow, GitHub, CodePlex and more 
                        </li> 
                    </ul> 
                    <button> Create Profile</button> 
                </div>
            </div>
        )
    }
})
