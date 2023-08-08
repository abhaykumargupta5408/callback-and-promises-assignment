document.addEventListener("DOMContentLoaded", function() {
    const nameForm = document.getElementById("nameForm");
    const nameInput = document.getElementById("nameInput");
    const greetingMessage = document.getElementById("greetingMessage");
  
    nameForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = nameInput.value.trim();
  
      greetWithPromise(name)
        .then(message => {
          greetingMessage.textContent = message;
        })
        .catch(error => {
          greetingMessage.textContent = error;
        });
    });
  
    function greetWithPromise(name) {
      return new Promise((resolve, reject) => {
        if (typeof name === "string" && name.trim() !== "") {
          const greeting = `Hello, ${name}!`;
          resolve(greeting);
        } else {
          reject("Invalid name");
        }
      });
    }
  });
  