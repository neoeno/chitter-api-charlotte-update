"use strict";

(function (exports) {

  function PeepListView(peepList) {
    this.peepList = peepList;
    this.html = "<ul>";
  };

  PeepListView.prototype.returnPeepHTML = function() {
    for (var i = 0; i < this.peepList.peepListArray.length; i++) {
      var peep = this.peepList.peepListArray[i].peep.body;
      var user = this.peepList.peepListArray[i].peep.user.handle;
      this.html = this.html + `<li><div>${peep}</div><div>Posted by: ${user}</div></li><br>`;
    }
    this.html = this.html + "</ul>";
    return this.html;
  };

  exports.PeepListView = PeepListView;

})(this);
