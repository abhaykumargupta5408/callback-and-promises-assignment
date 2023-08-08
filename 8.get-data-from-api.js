const apiUrl = "https://jsonplaceholder.typicode.com/posts";

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Data from API:", data);
  })
  .catch(error => {
    console.error("An error occurred:", error.message);
  });
