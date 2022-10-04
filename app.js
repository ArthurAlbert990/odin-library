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

function addModal(){
    console.log('addModal')
    //modal to collect user inputs
    //pass to addBooktToLibrary function
}

function addBookToLibrary(){
    //pass book to Book constructor function using user input.
}

function updateBooksDisplay(){
    //function to update html with myLibrary books.
}

function deleteBook(e){
    //obtain element parents until tr
    let td = e.target.parentNode;
    let tr = td.parentNode;
    //delete tr child element from tbody
    //tr.parentNode = <tbody>
    tr.parentNode.removeChild(tr);

    //it should delete from the "db" list "myLibrary" too.
    //how to obtain a reference to delete/edit? Like a index?
}

function editBook(e){
    console.log('edit book')
}

//BINDING
// selectors
const addButton = document.querySelectorAll('.add-btn')
const deleteButtons = document.querySelectorAll('.del-btn')
const editButtons = document.querySelectorAll('.edit-btn')

//bind events
addButton.addEventListener('click',addModal)

deleteButtons.forEach(element => {
    element.addEventListener('click',deleteBook)    
});

editButtons.forEach(element => {
    element.addEventListener('click',editBook)
})