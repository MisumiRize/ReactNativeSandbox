var ReactClass = require('react/lib/ReactClass');
var ReactElement = require('react/lib/ReactElement');
var ReactAndroidDefaultInjection = require('./ReactAndroidDefaultInjection');
var ReactAndroidMount = require('./ReactAndroidMount');

ReactAndroidDefaultInjection.inject();

var render = function(component, mountInto) {
  ReactAndroidMount.renderComponent(component, mountInto);
};

var ReactAndroid = {
  createClass: ReactClass.createClass,
  createElement: ReactElement.createElement,
  render: render
};

module.exports = ReactAndroid;
