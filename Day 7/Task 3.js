const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    getTitleAndAuthor() {
        return `${this.title} by ${this.author}`;
    }
}

console.log(book.getTitleAndAuthor());