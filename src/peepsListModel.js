"use strict";

(function(exports) {

  function PeepList() {
    this.peepListArray = [];
  };

  PeepList.prototype.addPeeps = function(apiCall) {
    for(var i = 0; i < apiCall.length; i++) {
      var id = this.peepListArray.length;
      var peep = new Peep(apiCall[i])
      this.peepListArray.push(peep)
    };
  };

  exports.PeepList = PeepList;

})(this);
