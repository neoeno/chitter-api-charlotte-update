"use strict";

(function testPeepListViewReturnsAStringOfHTMLForMultiplePeeps() {
    var peepListDouble = { peepListArray: [
      {'id': 2, 'peep': {
        'id': 2,
        'body': "Test chitter peep number 2",
        "created_at": "2018-07-22T15:48:17.507Z",
        "updated_at": "2018-07-22T15:48:17.507Z",
        "user":{
          "id": 3,
          "handle":"charlotte"
          },
        "likes": [{
          "user": {
            "id":3,"handle":"charlotte"
          }
        }]
      }
    },
      {'id': 1, 'peep': {
        'id': 1,
        'body': "Test chitter peep number 1",
        "created_at": "2018-07-22T14:48:17.507Z",
        "updated_at": "2018-07-22T14:48:17.507Z",
        "user":{
          "id":3,
          "handle":"charlotte"
          },
        "likes": [{
          "user": {
            "id":3,"handle":"charlotte"
          }
        }]
      }
    }]}
    var peepListView = new PeepListView(peepListDouble);
    var expectedHTML = "<ul><li><div>Test chitter peep number 2</div><div>Posted by: charlotte</div></li><br><li><div>Test chitter peep number 1</div><div>Posted by: charlotte</div></li><br></ul>";
    assert.isTrue(peepListView.returnPeepHTML() === expectedHTML);
    console.log("Test for: Peep List View generates peep HTML string for multiple peeps PASSED");
  })();

  (function testPeepListViewReturnsAStringOfHTMLWithoutPeepsWhenNoneAvailable() {
      var peepListDouble = { peepListArray: [] }
      var peepListView = new PeepListView(peepListDouble);
      var expectedHTML = `<ul></ul>`
      assert.isTrue(peepListView.returnPeepHTML() === expectedHTML);
      console.log("Test for: Peep List View generates peep HTML string when no peeps available PASSED");
  })();
