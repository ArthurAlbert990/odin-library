console.log('js working')

let myLibrary = [];


function Book(title,author,pages,year,alreadyRead=false){
    //constructor
    //construct a book object
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.alreadyRead = alreadyRead;
}

function addBookToLibrary(){
    console.log('add book to library')
    const modalFormData = new FormData(form);
    
    const title = modalFormData.get('ftitle');
    const author= modalFormData.get('fauthor');
    const pages= modalFormData.get('fpages');
    const year= modalFormData.get('fyear');

    //FormData doesn't obtain checkboxes, diy:
    const alreadyRead= document.querySelector('#checkbox').checked;


    //pass book to Book constructor function using user input:
    let newBook = new Book(title,author,pages,year,alreadyRead);
    // push to "db":
    myLibrary.push(newBook);
    console.log(newBook);

    toggleModal();

    return newBook;
    
}

function updateBooksDisplay(){
    //function to update html with myLibrary books.
}

function deleteBook(e){
    console.log(e)
    //obtain element parents until tr
    let td = e.target.parentNode;
    let tr = td.parentNode;
    //delete tr child element from tbody
    //tr.parentNode = <tbody>
    console.log(`tr index to remove:${tr.rowIndex}`)
    tr.parentNode.removeChild(tr);
    

    //it should delete from the "db" list "myLibrary" too.
    //how to obtain a reference to delete/edit? Like a index?
}

function editBook(){
    console.log('edit book')
}

function toggleModal(){
    console.log('toggle modal')
    modal.classList.toggle('show-modal')
    //modal to collect user inputs
    //pass to addBooktToLibrary function
}

//BINDING
// selectors
const modal = document.querySelector('.modal')
const closeModal = document.querySelector('.close-btn')
const addBook = document.querySelector('.add-book')
const confirmButtonModal = document.querySelector('.confirm-btn')
const deleteButtons = document.querySelectorAll('.del-btn')
const editButtons = document.querySelectorAll('.edit-btn')
const form = document.querySelector('.form-addbook')


//bind events
addBook.addEventListener('click', toggleModal)
confirmButtonModal.addEventListener('click',addBookToLibrary)
closeModal.addEventListener('click', toggleModal)


deleteButtons.forEach(element => {
    element.addEventListener('click', deleteBook)    
});

editButtons.forEach(element => {
    element.addEventListener('click', editBook)
})


//OQUE FALTA IMPLEMENTAR:
//addBookToLibrary, limpar os campos antes do modal fechar.
//função deleteBook() ainda não deleta do db
//função editBook()
//função updateBooksDisplay()
