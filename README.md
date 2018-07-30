Chitter API Frontend Challenge
=================

### Quickstart:
#### How to install the code:
Assumes prior global installation of npm http-server
```
$ git clone https://github.com/CLTPayne/chitter-api-frontend-challenge.git
$ cd chitter-api-frontend-challenge
$ http-server
```

#### How to run the tests:
1. ```open specRunner.html```
2. Open the JavaScript console in the browser

### Approach to solving the challenge:
1. Explore the Chitter API and all the available API endpoints via curl
2. Build simple truthy assert clause for use in all tests
3. TDD a simulation of the MVC architecture.

### Status at point of push:
1. App renders all peeps and the relevant user name.

### Description of what code does:
Reproduces the MVC pattern in vanilla JavaScript, making calls to the Chitter API

### Code Style:
1. Vanilla JavaScript
2. All source code is wrapped in the module pattern
3. All specs are wrapped in IIFEs

### Features:
1. Users can view all peeps that have been made in Chitter

### Intended next steps:
1. Display likes and time of posting
2. Allow user to make a peep on Chitter (POST request to Chitter API)
3. Allow users to like a peep on Chitter

### Code Example:
Extract from the codebase:
```
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
```
