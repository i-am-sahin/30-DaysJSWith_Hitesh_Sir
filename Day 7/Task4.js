const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018,
    setYear(newYear) {
        this.year = newYear;
      }
}
book.setYear(2000)

console.log(book);