console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;
    

    
    arr.forEach((num) => {
        sum += num;
    });


    return sum;
}

console.log(arraySum(numbers));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "War and Peace",
    author: "Leo Tolstoy",
    pages: 1225,
    pushlishedYear: 1867,
    readCount: 7,
};

function info () {
    console.log(
        `${this.title} by ${this.author} was published in ${this.pushlishedYear}. It is ${this.pages} pages and has been read ${this.readCount} times.`
    );
}

book.info = info;

book.info();

