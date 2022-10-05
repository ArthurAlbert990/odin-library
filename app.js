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
    updateBooksDisplay();
    toggleModal();

    return newBook;
}

function clearModal(){
    let formFieldsData = new FormData(form);
    let field;
    for(let parameter of formFieldsData.entries()){
        field = document.querySelector(`#${parameter[0]}`)
        field.value = '';
    }
}

function updateBooksDisplay(){
    //clear table, empty start:
    tbody.innerHTML=''
    //insert books from db:
    let newRow;
    let newCell;
    for(let book of myLibrary){
        newRow = tbody.insertRow(-1)//new row at end
        //insert cells for each value of book 
        for(let value of Object.values(book)){
            newCell = newRow.insertCell(-1)
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
    //obtain element parents until tr
    let td = e.target.parentNode;
    let tr = td.parentNode;
    //delete tr child element from tbody
    //tr.parentNode = <tbody>
    //console.log(`tr index to remove:${tr.rowIndex}`)
    myLibrary.splice(tr.rowIndex-2,tr.rowIndex-2)
    tr.parentNode.removeChild(tr);
}

function editBook(e){
    console.log('edit book:');
    let td = e.target.parentNode;
    let tr = td.parentNode;
    let book = myLibrary[tr.rowIndex-2];
    modalTitle.value = book.title;
    modalAuthor.value = book.author;
    modalPages.value = book.pages;
    modalYear.value = book.year;
    modalCheckbox.checked = book.alreadyRead;
    toggleModal()
}

function toggleModal(){
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
const table = document.querySelector('.books-table');
const modalTitle= document.querySelector('#ftitle')
const modalAuthor= document.querySelector('#fauthor')
const modalPages= document.querySelector('#fpage')
const modalYear= document.querySelector('#fyear')
const modalCheckbox = document.querySelector('#checkbox')

//bind events
addBook.addEventListener('click', toggleModal)
confirmButtonModal.addEventListener('click',addBookToLibrary)
confirmButtonModal.addEventListener('click',clearModal)
closeModal.addEventListener('click', toggleModal)
closeModal.addEventListener('click', clearModal)



deleteButtons.forEach(element => {
    element.addEventListener('click', deleteBook)    
    });
editButtons.forEach(element => {
    element.addEventListener('click', editBook)
    });


//inicia já com um registro:
let startBook = new Book('The Lord of The Rings 1','J.R.R. Tolkien','475',2001,true)
myLibrary.push(startBook)
updateBooksDisplay()

//OQUE FALTA IMPLEMENTAR:
//Finalizar função editBook, ainda não edita da db.
//Botão para se já foi lido ou não