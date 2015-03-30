var ReactDefaultBatchingStrategy = require('react/lib/ReactDefaultBatchingStrategy');
var ReactUpdates = require('react/lib/ReactUpdates');
var ReactAndroidReconcileTransaction = require('./ReactAndroidReconcileTransaction');

function inject() {

  ReactUpdates.injection.injectReconcileTransaction(
    ReactAndroidReconcileTransaction
  );

  ReactUpdates.injection.injectBatchingStrategy(
    ReactDefaultBatchingStrategy
  );

}

module.exports = {
  inject: inject
};
