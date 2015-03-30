var ReactUpdates = require('react/lib/ReactUpdates');
var instantiateReactComponent = require('react/lib/instantiateReactComponent');

function instanceNumberToChildRootID(rootNodeID, instanceNubmer) {
  return rootNodeID + '[' + instanceNubmer + ']';
}

function batchedMountComponentIntoNode(
    componentInstance,
    rootID,
    container) {
  var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
  transaction.perform(
    mountComponentIntoNode,
    null,
    componentInstance,
    rootID,
    container,
    transaction
  );
  ReactUpdates.ReactReconcileTransaction.release(transaction);
}

var ReactAndroidMount = {
  instanceCount: 0,

  _instancesByContainerID: {},

  renderComponent: function(descriptor, containerTag) {
    var instance = instantiateReactComponent(descriptor);

    var topRootNodeID = '.r[' + containerTag + ']{TOP_LEVEL}';

    var childRootNodeID = instanceNumberToChildRootID(
      topRootNodeID,
      ReactAndroidMount.instanceCount++
    );
    ReactAndroidMount._instancesByContainerID[topRootNodeID] = instance;

    ReactUpdates.batchedUpdates(
      batchedMountComponentIntoNode,
      instance,
      childRootNodeID,
      topRootNodeID
    );
  }
};

module.exrpots = ReactAndroidMount;
