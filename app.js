console.log('js working')

let myLibrary = [];


function Book(title,author,pages,year,alreadyRead=false){
    //constructor
    //"construct a book object"
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.alreadyRead = alreadyRead;
}

function addBookToLibrary(){
    //pass book to Book constructor function using user input.
}

function updateBooksDisplay(){
    //function to update html with myLibrary books.
}