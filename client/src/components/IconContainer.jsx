var React = require('react');
var IconComponent = require('./IconComponent.jsx')

var IconContainer = React.createClass({

  render: function(){
    return(
      <div>
        <IconComponent image="http://www.bungie.net//common/destiny_content/icons/d88139c9e99fd5ec8d3beb7cf44938f7.jpg"/>
      </div>
      )
  }

})

module.exports = IconContainer;