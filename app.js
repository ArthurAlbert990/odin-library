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
    const pages= modalFormData.get('fpage');
    const year= modalFormData.get('fyear');

    //FormData doesn't obtain checkboxes, diy:
    const alreadyRead= document.querySelector('#checkbox').checked;
    //pass book to Book constructor function using user input:
    let newBook = new Book(title,author,pages,year,alreadyRead);
    // push to "db":
    myLibrary.push(newBook);
    //console.log(newBook);
    clearModal(modalFormData);
    toggleModal();

    return newBook;
}

function clearModal(formFieldsData){
    let field;
    for(let parameter of formFieldsData.entries()){
        field = document.querySelector(`#${parameter[0]}`)
        field.value = '';
    }
}

function updateBooksDisplay(){
    console.log('updateBooksDisplay')
    //clear table, empty start:
    tbody.innerHTML=''
    //insert books from db:
    let newRow;
    let newCell;
    for(let book of myLibrary){
        newRow = tbody.insertRow(0)//new row at beginning
        //insert cells for each value of book 
        for(let value of Object.values(book)){
            newCell = newRow.insertCell()
            newCell.innerHTML = value;
        }
        //insert buttons at end
        newCell = newRow.insertCell()
        newCell.innerHTML = `<button type="button" class="edit-btn">edit</button>
        <button type="button" class="del-btn">delete</button>`;
    }
    //add listener for new buttons:
    let deleteButtons = document.querySelectorAll('.del-btn');
    let editButtons = document.querySelectorAll('.edit-btn');

    deleteButtons.forEach(element => {
        element.addEventListener('click', deleteBook)    
        });
    editButtons.forEach(element => {
        element.addEventListener('click', editBook)
        });
}

function deleteBook(e){
    console.log(e)
    //obtain element parents until tr
    let td = e.target.parentNode;
    let tr = td.parentNode;
    //delete tr child element from tbody
    //tr.parentNode = <tbody>
    console.log(`tr index to remove:${tr.rowIndex}`)
    myLibrary.splice(tr.rowIndex-1,tr.rowIndex-1)
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
}

// selectors
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-btn');
const addBook = document.querySelector('.add-book');
const confirmButtonModal = document.querySelector('.confirm-btn');
const deleteButtons = document.querySelectorAll('.del-btn');
const editButtons = document.querySelectorAll('.edit-btn');
const form = document.querySelector('.form-addbook');
const tbody = document.querySelector('.bookDisplay');
const table = document.querySelector('.books-table')

//bind events
addBook.addEventListener('click', toggleModal)
confirmButtonModal.addEventListener('click',addBookToLibrary)
closeModal.addEventListener('click', toggleModal)



deleteButtons.forEach(element => {
    element.addEventListener('click', deleteBook)    
    });
editButtons.forEach(element => {
    element.addEventListener('click', editBook)
    });


//OQUE FALTA IMPLEMENTAR:
//função deleteBook() ainda não deleta do db
//função editBook()

