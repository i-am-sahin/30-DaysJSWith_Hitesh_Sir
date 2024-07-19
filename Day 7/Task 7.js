const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    getInfo(){
        return `${this.title} (${this.year})`;
    }
}
console.log(book.getInfo);