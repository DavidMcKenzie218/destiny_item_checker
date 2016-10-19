var React = require('react');
var IconComponent = require('./IconComponent.jsx')

var IconContainer = React.createClass({

  changeWeapon: function(){

  },

  render: function(){

  var icons = this.props.data.map(function(weapon, index){
    return(<IconComponent key={index} image={weapon.img} onClick={this.changeWeapon}></IconComponent>);
  })
    return(
      <div>
        {icons}
      </div>
      )
  }

})

module.exports = IconContainer;