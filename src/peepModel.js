"use strict";

(function(exports) {

  function Peep(peep) {
    this.peep = peep;
    this.id = peep.id;
  };

  Peep.prototype.body = function() {
    return this.peep.body;
  };

  exports.Peep = Peep;

})(this);
