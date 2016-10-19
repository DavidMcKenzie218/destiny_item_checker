var React = require('react');
var TitleComponent = require('./TitleComponent.jsx');
var InfoComponent = require('./InfoComponent.jsx');
var IconContainer = require('./IconContainer.jsx');

var WeaponContainer = React.createClass({

  render: function(){
    return(
      <div>
        <TitleComponent title="Weapon Title"/>
        <IconContainer/>
        <InfoComponent name="Name" weaponDescription="Description" quote="quote"/>
      </div>
      )
  }

})

module.exports = WeaponContainer;