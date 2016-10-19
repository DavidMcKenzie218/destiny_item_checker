var React = require('react');
var IconComponent = require('./IconComponent.jsx')

var IconContainer = React.createClass({

  render: function(){

  var icons = this.props.data.map(function(weapon, index){
    return(<IconComponent id={weapon} key={index} image={weapon.img} onClicked={this.props.onClicked}></IconComponent>);
  }.bind(this))
  console.log(icons)
    return(
      <div>
        {icons}
      </div>
      )
  }

})

module.exports = IconContainer;