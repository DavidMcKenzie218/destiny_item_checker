var React = require('react');
var ReactDOM = require('react-dom');
var WeaponContainer = require('./components/WeaponContainer.jsx');

window.onload = function(){
  ReactDOM.render(
    <WeaponContainer/>,
    document.getElementById('app')
  );
}
