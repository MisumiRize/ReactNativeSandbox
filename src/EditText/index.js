var React = require('../ReactAndroid');

var createReactAndroidNativeComponentClass = require('../ReactAndroid/createReactAndroidNativeComponentClass');

var viewConfig = {
  uiViewClassName: 'com.reactnative.exampleapp.RCTEditText'
};

var RCTEditText = createReactAndroidNativeComponentClass(viewConfig);

var EditText = React.createClass({
  render: function() {
    return React.createElement(RCTEditText);
  }
});

module.exports = EditText;
