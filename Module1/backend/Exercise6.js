//create a jason object variable for a book
const book = {
    "title" : "Atomic Habits",
    "description" : "self help book",
    "author" : "James Clear",
    "numOfPages" : "320"
}

// print these object property values in the console individually
console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.numOfPages);

// print these object property values in the console via the whole book object
console.log(book);

// udate the description of the book
book.description = "non-fiction";
console.log(book);