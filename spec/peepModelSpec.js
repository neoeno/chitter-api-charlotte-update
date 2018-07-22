"use strict";

(function testPeepModelCanAccessPeep() {
  var apiCallResponse = [{
    'id':1,
    "body": "Test chitter first peep",
    "created_at": "2018-07-22T15:48:17.507Z",
    "updated_at": "2018-07-22T15:48:17.507Z",
    "user":{
      "id":3,
      "handle":"charlotte"
      },
    "likes": [{"user":{"id":3,"handle":"charlotte"}}]
  }]
  var peep = new Peep(apiCallResponse[0])
  assert.isTrue(peep.body() === "Test chitter first peep")
  console.log("Test: Peep model can access a headline PASSED")
})();
