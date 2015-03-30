var ReactAndroidMount = require('./ReactAndroidMount');
var Text = require('../Text');

var render = function(component, mountInto) {
  ReactAndroidMount.renderComponent(component, mountInto);
};

var ReactAndroid = {
  render: render,

  Text: Text
};

module.exports = ReactAndroid;
