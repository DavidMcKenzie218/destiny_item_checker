var React = require('react');
var IconComponent = require('./IconComponent.jsx')

var IconContainer = React.createClass({

  makeButtons: function(){
    for(var weapon of this.props.data){
     console.log(weapon);
    }
  },

  render: function(){

  var icons = this.props.data.map(function(weapon, index){
    return(<IconComponent id={weapon.name} key={index} image={weapon.img}></IconComponent>);
  })
  console.log(icons)
  this.makeButtons();
    return(
      <div>
        {icons}
      </div>
      )
  }

})

module.exports = IconContainer;