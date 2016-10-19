var React = require('react');
var TitleComponent = require('./TitleComponent.jsx');

var WeaponContainer = React.createClass({

  render: function(){
    return(
      <div>
        <TitleComponent title="Weapon Title"/>
      </div>
      )
  }

})

module.exports = WeaponContainer;