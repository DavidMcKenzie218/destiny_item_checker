var React = require('react');

var InfoComponent = function(props){

  var weaponData = props.data;

  return(
    <div>
      <h4>{props.name}</h4>
      <p>{weaponData.description}</p>
      <p>{weaponData.quote}</p>
    </div>
    )
}

module.exports = InfoComponent;