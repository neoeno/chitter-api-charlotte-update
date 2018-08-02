function makeGetRequest(url, onSuccess) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState < 4) {
      return;
    }
    if (xhr.status !== 200) {
      return;
    }
    var responseJSON = JSON.parse(xhr.responseText);

    onSuccess(responseJSON);
  };
  xhr.open("GET", url, true);
  xhr.send("");
}
