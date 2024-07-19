const book = {
    title: "Atomic Habits",
    author: "James Clear",
    year: 2018
}

for (const key in book) {
    console.log(`${key}: ${book[key]}`);
  }