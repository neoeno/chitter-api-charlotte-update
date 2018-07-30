"use strict";

(function (exports) {

  function PeepsController(peepsList) {
    this.peepsListView = new PeepListView(peepsList);
  };

  PeepsController.prototype.renderHTML = function() {
  var element = document.getElementById('app')
  element.innerHTML = this.peepsListView.returnPeepHTML();
  };

  PeepsController.prototype.loadPeeps = function() {
    var xhr = new XMLHttpRequest();
    var url = "https://chitter-backend-api.herokuapp.com/peeps"
    xhr.onreadystatechange = peepsCallback;
    function peepsCallback() {
      if (xhr.readystate < 4) {
        return;
      }
      if (xhr.status !== 200) {
        return;
      }
      var apiCall = JSON.parse(xhr.responseText);

      executePeeps(apiCall);
    };
    xhr.open("GET", url, true);
    xhr.send("");
  }

  function executePeeps(apiCall) {
    var peepsList = new PeepList;
    peepsList.addPeeps(apiCall);
    var peepsController = new PeepsController(peepsList);
    peepsController.renderHTML();
  };

  exports.PeepsController = PeepsController;
})(this);
