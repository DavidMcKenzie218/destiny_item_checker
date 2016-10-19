var React = require('react');

var InfoComponent = function(props){
  return(
    <div>
      <h4>{props.name}</h4>
      <p>{props.weaponDescription}</p>
      <p>{props.quote}</p>
    </div>
    )
}

module.exports = InfoComponent;