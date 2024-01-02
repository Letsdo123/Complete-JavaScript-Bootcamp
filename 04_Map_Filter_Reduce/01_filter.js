const coding = ["js", "ruby", "java", "python", "cpp"];

// return types of foreach loop
// It doesn't return anything
let values = coding.forEach((item) => {
    // console.log(item);
});
// The value is undefined bcz it doesn't return anything
// console.log(values);

// Map Filter Reduce For itetrate array conditionally
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const filteredNums = myNums.filter((num) => {
    return num > 4;
});
// console.log(filteredNums);
// perform filter on array of objects
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
// filter the books which journey is history
let filteredBooks=books.filter((book)=>{
    // return book.genre == 'History'
    return book.publish >= 2000
});
console.log(filteredBooks);