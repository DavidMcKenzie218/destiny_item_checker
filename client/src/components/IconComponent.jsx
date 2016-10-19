var React = require('react');

var Icon = function(props){
  var handleClick = function(){
    props.onClicked(props.id)
  }
  return(
<<<<<<< HEAD

    <div>
      <img src={props.image} onClick={handleClick}></img>
    </div>
=======
      <img src={props.image}></img>
>>>>>>> f8427506ac7a231cb13d762b5f1858e2934b0d20
    )
}

module.exports = Icon;