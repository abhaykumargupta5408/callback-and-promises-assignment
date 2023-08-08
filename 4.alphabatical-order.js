function logTitlesAlphabetically(titles) {
    titles.sort();
    console.log("Titles in alphabetical order:");
    titles.forEach(title => {
      console.log(title);
    });
  }
  
  function getBookTitles(books, callback) {
    const bookTitles = books.map(book => book.title);
    callback(bookTitles);
  }
  
  const bookList = [
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];
  
  getBookTitles(bookList, logTitlesAlphabetically);
  