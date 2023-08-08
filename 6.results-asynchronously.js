async function fetchDataFromAPI(url) {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
  fetchDataFromAPI(apiUrl);
  