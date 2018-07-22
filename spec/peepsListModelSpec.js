"use strict";

(function testPeepsListModelCanStorePeeps() {
  var apiCallDouble = [{
    'id':2,
    "body": "Test chitter second peep",
    "created_at": "2018-07-22T16:48:17.507Z",
    "updated_at": "2018-07-22T16:48:17.507Z",
    "user":{
      "id":3,
      "handle":"charlotte"
      },
    "likes": [{"user":{"id":3,"handle":"charlotte"}}]
    },
    {
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

  var peepList = new PeepList();
  peepList.addPeeps(apiCallDouble);
  assert.isTrue(peepList.peepListArray[0]['peep']['body'] === "Test chitter second peep");
  console.log("Test: Peep List model can store multiple peeps PASSED");
})();
