var assign = require('react/lib/Object.assign');

var ReactAndroidNativeComponent = function(viewConfig) {
  this.viewConfig = viewConfig;
};

var tagCount = 2;

ReactAndroidNativeComponent.Mixin = {
  construct: function(element) {
    this._currentElement = element;
  },

  receiveComponent: function(nextElement, transaction, context) {
    console.log(nextElement);
  },

  unmountComponent: function() {
    this.unmountChildren();
    this._rootNodeID = null;
  },

  mountComponent: function(rootID, transaction, context) {
    this._rootNodeID = rootID;

    var tag = tagCount;
    tagCount++;

    RCTUIManager.createView(tag, this.viewConfig.uiViewClassName);
    return {
      rootNodeID: rootID,
      tag: tag
    };
  }
};

assign(
  ReactAndroidNativeComponent.prototype,
  ReactAndroidNativeComponent.Mixin
);

module.exports = ReactAndroidNativeComponent;
