document.addEventListener("DOMContentLoaded", function() {
    const errorMessageElement = document.getElementById("errorMessage");
  
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/123456789"; // Invalid API URL for error simulation
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        // Display data (not executed in this example due to error simulation)
        errorMessageElement.textContent = "Data fetched successfully!";
      })
      .catch(error => {
        errorMessageElement.textContent = `An error occurred: ${error.message}`;
      });
  });
  