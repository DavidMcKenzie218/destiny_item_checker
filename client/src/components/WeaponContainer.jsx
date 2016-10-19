var React = require('react');
var TitleComponent = require('./TitleComponent.jsx');
var InfoComponent = require('./InfoComponent.jsx');
var IconContainer = require('./IconContainer.jsx');

var WeaponContainer = React.createClass({

  getInitialState: function(){
    return{items: [], selectedWeapon: {name: "select a Weapon", description: "", quote:""}}
  },

  componentDidMount: function(){
    var url = "http://localhost:3000/api/items";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      console.log("request has loaded");
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      this.setState({
        items: data
      });
    }.bind(this);
    request.send();
  },

  // setFocusItem: function(index){
  //   var newItem = this.state.items[index];
  //   this.setState({
  //     focusItem: newItem
  //   });

  weaponClicked: function(id){
    var selectedWeapon = {name: id.name, description: id.description, quote: id.quote}
    this.setState({selectedWeapon: selectedWeapon})
  },

  render: function(){
    return(
      <div>
        <TitleComponent title={this.state.selectedWeapon.name}/>
        <IconContainer data={this.state.items} onClicked={this.weaponClicked}/>
        <InfoComponent name={this.state.selectedWeapon.name} data={this.state.selectedWeapon}/>
      </div>
      )
  }

})

module.exports = WeaponContainer;