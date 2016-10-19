var React = require('react');

var Icon = function(props){
  var handleClick = function(){
    props.onClicked(props.id)
  }
  return(
      <img src={props.image} onClick={handleClick}></img>
    )
}

module.exports = Icon;