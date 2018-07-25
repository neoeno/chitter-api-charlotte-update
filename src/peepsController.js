"use strict";

(function (exports) {

  function PeepsController(peepsList) {
    this.peepsListView = new PeepListView(peepsList);
  };

  PeepsController.prototype.renderHTML = function() {
  var element = document.getElementById('app')
  element.innerHTML = this.peepsListView.returnPeepHTML();
  };

  exports.PeepsController = PeepsController;
})(this);
