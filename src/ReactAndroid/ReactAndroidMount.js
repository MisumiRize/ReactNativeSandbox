var ReactReconciler = require('react/lib/ReactReconciler');
var ReactUpdates = require('react/lib/ReactUpdates');

var emptyObject = require('react/lib/emptyObject');
var instantiateReactComponent = require('react/lib/instantiateReactComponent');

function instanceNumberToChildRootID(rootNodeID, instanceNubmer) {
  return rootNodeID + '[' + instanceNubmer + ']';
}

function mountComponentIntoNode(
    componentInstance,
    rootID,
    container,
    transaction) {
  var markup = ReactReconciler.mountComponent(
    componentInstance, rootID, transaction, emptyObject
  );
  componentInstance._isTopLevel = true;
  ReactAndroidMount._mountImageIntoNode(markup, container);
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
  },

  _mountImageIntoNode: function(mountImage, containerID) {
    var addChildTags = [mountImage.tag];
    var addAtIndices = [0];
    RCTUIManager.manageChildren(
      null,
      null,
      addChildTags,
      addAtIndices
    );
  }
};

module.exports = ReactAndroidMount;
