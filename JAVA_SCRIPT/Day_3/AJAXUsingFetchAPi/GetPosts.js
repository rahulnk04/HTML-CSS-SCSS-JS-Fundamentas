function GetPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      console.log("Within First then block");
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something went wrong !");
      }
    }
  );
}
