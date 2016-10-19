var React = require('react');

var Icon = function(props){
  var handleClick = function(){
    props.onClicked(props.id)
  }
  return(

    <div>
      <img src={props.image} onClick={handleClick}></img>
    </div>

    )
}

module.exports = Icon;