function GetPosts() {
  return new Promise(function (resolve, reject) {
    var xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState === 4 && xmlHttpReq.status === 200) {
        resolve(xmlHttpReq.responseText);
      } else if (xmlHttpReq.readyState === 4 && xmlHttpReq.status !== 200) {
        reject("Something Went Wrong !");
      }
    };
    xmlHttpReq.send();
  });
}
