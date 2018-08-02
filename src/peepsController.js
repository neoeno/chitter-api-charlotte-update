"use strict";

(function (exports) {
  var PEEPS_URL = "https://chitter-backend-api.herokuapp.com/peeps";

  function PeepsController(peepsList, _makeGetRequest = makeGetRequest) {
    this.peepsListView = new PeepListView(peepsList);
    this._makeGetRequest = _makeGetRequest;
  };

  PeepsController.prototype.renderHTML = function() {
    var element = document.getElementById('app')
    element.innerHTML = this.peepsListView.returnPeepHTML();
  };

  PeepsController.prototype.loadPeeps = function() {
    this._makeGetRequest(PEEPS_URL, function(peeps) {
      executePeeps(peeps);
    });
  }

  function executePeeps(apiCall) {
    var peepsList = new PeepList;
    peepsList.addPeeps(apiCall);
    var peepsController = new PeepsController(peepsList);
    peepsController.renderHTML();
  };

  exports.PeepsController = PeepsController;
})(this);
