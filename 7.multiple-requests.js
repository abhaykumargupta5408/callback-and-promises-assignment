async function fetchDataFromMultipleAPIs() {
    const todoURL = "https://jsonplaceholder.typicode.com/todos/1";
    const postURL = "https://jsonplaceholder.typicode.com/posts/1";
  
    try {
      const [todoResponse, postResponse] = await Promise.all([
        fetch(todoURL),
        fetch(postURL)
      ]);
  
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error("HTTP error!");
      }
  
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
      const combinedData = {
        todo: todoData,
        post: postData
      };
  
      console.log("Combined data:", combinedData);
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  }
  
  fetchDataFromMultipleAPIs();
  