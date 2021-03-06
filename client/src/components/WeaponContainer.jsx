var React = require('react');
var TitleComponent = require('./TitleComponent.jsx');
var InfoComponent = require('./InfoComponent.jsx');
var IconContainer = require('./IconContainer.jsx');

var testData = [{name: "Weapon 1", description: "Weapon 1 descriptions", quote: "Weapon 1 quote", img: "http://www.bungie.net//common/destiny_content/icons/d88139c9e99fd5ec8d3beb7cf44938f7.jpg"}, {name: "Weapon 2", description: "Weapon 2 descriptions", quote: "Weapon 2 quote", img: "https://www.bungie.net/common/destiny_content/icons/a0a61a73bc5d680844824b795c14e7c9.jpg"}]

var WeaponContainer = React.createClass({

  getInitialState: function(){
    return{data: testData, selectedWeapon: {name: "Select a weapon", data: {desctiption: "No item selected", quote: "No item selected"}}}
  },

  weaponClicked: function(id){
    var selectedWeapon = {name: id.name, data: {description: id.description, quote: id.quote}}
    this.setState({selectedWeapon: selectedWeapon})
  },

  render: function(){
    return(
      <div>
        <TitleComponent title={this.state.selectedWeapon.name}/>
        <IconContainer data={this.state.data} onClicked={this.weaponClicked}/>
        <InfoComponent name={this.state.selectedWeapon.name} data={this.state.selectedWeapon.data}/>
      </div>
      )
  }

})

module.exports = WeaponContainer;