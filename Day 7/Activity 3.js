// Task 5

const library = {
    name: "Central Library",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "Atomic Habits",
            author: "James Clear",
            year: 2018
        }
    ]
}

console.log(library);


//Task 6

console.log(library.name);
library.books.forEach(book => console.log(book.title));

