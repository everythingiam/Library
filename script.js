var boook = new Book('Ggsdg', 'gesgse', true, 55);
const myLibrary = [];

const btnAdd = document.querySelector('.add');
const btnSubmit = document.querySelector('.submit');
const dialogWindow = document.querySelector('.dialog');
const dialogContent = document.querySelector('.dialog-content')
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const readCheck = document.getElementById('readCheckbox');
const formm = document.getElementById('formm');


function Book(title, author, readYnN, index){
    this.title = title;
    this.author = author;
    this.index = index;
    if (readYnN)
        this.readText = 'Read';
    else this.readText = 'Not Read';
}

Book.prototype.toggleStatus = function () {
    this.readText = this.readText === 'Read' ? 'Not Read' : 'Read';
}
Book.prototype.deleteBook = function (){
    var ind = myLibrary.indexOf(this);
    myLibrary.splice(ind, 1);
}

btnAdd.addEventListener('click', () => {
    dialogWindow.style.display = 'block';
});
dialogWindow.addEventListener('click', () => {
    dialogWindow.style.display = 'none';
})
dialogContent.addEventListener('click', (event) => {
    event.stopPropagation();
})
formm.addEventListener('submit', (event) =>{
    event.preventDefault();
    addBook();
    resetForm();
    dialogWindow.style.display = 'none';
    console.log(myLibrary);
})

function createCard(book){
    var card = document.createElement("div");
    card.className = "card";
    var titlee = document.createElement("h3");
    titlee.textContent = book.title;
    var spann = document.createElement("span");
    spann.textContent = "Author:"
    var authorr = document.createElement("p"); 
    authorr.textContent = book.author;
    var status = document.createElement("button");
    status.className = "reading";
    status.textContent = book.readText;
    status.addEventListener('click', () => {
        book.toggleStatus();
        status.textContent = book.readText;
    });
    var deletee = document.createElement("button");
    deletee.className = "delete";
    deletee.textContent = "Delete";
    deletee.addEventListener('click', () => {
        book.deleteBook();
        card.remove();
    })
    card.appendChild(titlee);
    card.appendChild(spann);
    card.appendChild(authorr);
    card.appendChild(status);
    card.appendChild(deletee);
    document.querySelector('.books').appendChild(card)
    console.log(book.title)
}

function addBook(){
    const newBook = new Book(titleInput.value, authorInput.value, readCheck.checked, Date.now());
    myLibrary.push(newBook);
    createCard(newBook);
}

function resetForm(){
    titleInput.value = '';
    authorInput.value = '';
    readCheck.checked = false;
}

