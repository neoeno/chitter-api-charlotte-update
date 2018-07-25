"use strict";

(function testPeepsControllerCanUpdateDOM() {
  var peepListViewDouble = {};
  var peepsController = new PeepsController(peepListViewDouble);
  var htmlText = "<ul><li><div>Test chitter peep number 3</div><div>Posted by: charlotte</div></li><br></ul>";
  peepsController.peepsListView.returnPeepHTML = function stubReturnHTML() {
    return htmlText;
  };
  peepsController.renderHTML()
  var element = document.getElementById('app').innerHTML;
  assert.isTrue(element === htmlText)
  console.log("Test: Peeps Controller renders peep on the page PASSED")
})();
