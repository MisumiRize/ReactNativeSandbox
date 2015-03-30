var React = require('react');

var createReactAndroidNativeComponentClass = require('../ReactAndroid/createReactAndroidNativeComponentClass');

var viewConfig = {
  uiViewClassName: 'com.reactnative.reactnativeexample.widget.RCTEditText'
};

var RCTEditText = createReactAndroidNativeComponentClass(viewConfig);

var Text = React.createElement({
  render: function() {
    return React.createElement(RCTEditText);
  }
});

