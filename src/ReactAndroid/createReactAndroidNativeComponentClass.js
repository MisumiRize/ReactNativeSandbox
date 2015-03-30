var ReactAndroidNativeComponent = require('./ReactAndroidNativeComponent');

var createReactAndroidNativeComponentClass = function(viewConfig) {
  var Constructor = function(element) {
    this._currentElement = element;

    this._rootNodeID = null;
  };
  Constructor.prototype = new ReactAndroidNativeComponent(viewConfig);

  return Constructor;
};

module.exports = createReactAndroidNativeComponentClass;
