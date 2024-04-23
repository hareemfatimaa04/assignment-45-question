// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define the Book interface
interface Book {
    title: string;
    author: string;
    pages: number;
}

// Create objects containing information about different books
const book1: Book = {
    title: "Seerat e Ayesha R.A",
    author: "Allama Syed Sulaiman Nadvi",
    pages: 323
};

const book2: Book = {
    title: "Jab Zindagi Shuru Hogi",
    author: "Abu Yahayya",
    pages: 272
};


console.log("Book 1:");
console.log("Title:", book1.title);
console.log("Author:", book1.author);
console.log("Pages:", book1.pages);

console.log("\nBook 2:");
console.log("Title:", book2.title);
console.log("Author:", book2.author);
console.log("Pages:", book2.pages);

//method 2


let person: {name: string, fname: string, age: number} = {name: "Afshen Khanum", fname: "female", age: 30 };
console.log(person);
