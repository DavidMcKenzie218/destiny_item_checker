var React = require('react');
var IconComponent = require('./IconComponent.jsx')

var IconContainer = React.createClass({

  render: function(){

  var icons = this.props.data.map(function(weapon, index){
    return(<IconComponent key={index} image={weapon.img}></IconComponent>);
  })
    return(
      <div>
        {icons}
      </div>
      )
  }

})

module.exports = IconContainer;