var ReactAndroid = require('./ReactAndroid');
var EditText = require('./EditText');

var assign = require('react/lib/Object.assign');

var ReactNative = assign(
  ReactAndroid,
  {
    EditText: EditText
  }
);

module.exports = ReactNative;
