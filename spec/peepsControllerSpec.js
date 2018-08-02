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

(function testPeepsControllerLoadsPeepsFromAPICall() {
  var fakeMakeGetRequest = function(url, callback) {
    callback([{"id":1, "body":"Test chitter peep number 4","created_at":"2018-06-23T13:21:23.317Z","updated_at":"2018-06-23T13:21:23.317Z","user":{"id":1,"handle":"test_user"},"likes":[{"user":{"id":2,"handle":"test_user2"}}]}]);
  }
  var peepsController = new PeepsController([], fakeMakeGetRequest);
  peepsController.loadPeeps();

  var actual = document.getElementById('app').innerHTML;
  var expected = "<ul><li><div>Test chitter peep number 4</div><div>Posted by: test_user</div></li><br></ul>";
  assert.isTrue(actual === expected);
  console.log("Test for: Peep Controller renders XML response PASSED");
})();
