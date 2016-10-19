var React = require('react');
var TitleComponent = require('./TitleComponent.jsx');
var InfoComponent = require('./InfoComponent.jsx');
var IconContainer = require('./IconContainer.jsx');

// var testData = [{name: "Weapon 1", description: "Weapon 1 descriptions", quote: "Weapon 1 quote", img: "http://www.bungie.net//common/destiny_content/icons/d88139c9e99fd5ec8d3beb7cf44938f7.jpg"}, {name: "Weapon 2", description: "Weapon 2 descriptions", quote: "Weapon 2 quote", img: "https://www.bungie.net/common/destiny_content/icons/a0a61a73bc5d680844824b795c14e7c9.jpg"}]

var WeaponContainer = React.createClass({

  getInitialState: function(){
    return{items: [], selectedItem: null}
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

  setFocusCountry: function(index){
    var newItem = this.state.items[index];
    this.setState({
      focusItem: newItem
    });
  },

  render: function(){
    return(
      <div>
        <TitleComponent title={this.state.selectedItem.name}/>
        <IconContainer data={this.state.item}/>
        <InfoComponent name={this.state.selectedItem.name} data={this.state.selectedItem}/>
      </div>
      )
  }

})

module.exports = WeaponContainer;