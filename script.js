class Book {
    constructor(title, author, readYnN, index) {
        this.title = title;
        this.author = author;
        this.index = index;
        this.readText = readYnN ? 'Read' : 'Not Read';
    }

    toggleStatus() {
        this.readText = this.readText === 'Read' ? 'Not Read' : 'Read';
    }

    deleteBook() {
        const ind = myLibrary.indexOf(this);
        if (ind !== -1) {
            myLibrary.splice(ind, 1);
        }
    }
}

const myLibrary = [];

const btnAdd = document.querySelector('.add');
const btnSubmit = document.querySelector('.submit');
const dialogWindow = document.querySelector('.dialog');
const dialogContent = document.querySelector('.dialog-content');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const readCheck = document.getElementById('readCheckbox');
const formm = document.getElementById('formm');

btnAdd.addEventListener('click', () => {
    dialogWindow.style.display = 'block';
});

dialogWindow.addEventListener('click', () => {
    dialogWindow.style.display = 'none';
});

dialogContent.addEventListener('click', (event) => {
    event.stopPropagation();
});

formm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBook();
    resetForm();
    console.log(myLibrary);
});

function createCard(book) {
    const card = document.createElement('div');
    card.className = 'card';

    const titlee = document.createElement('h3');
    titlee.textContent = book.title;

    const spann = document.createElement('span');
    spann.textContent = 'Author:';

    const authorr = document.createElement('p');
    authorr.textContent = book.author;

    const status = document.createElement('button');
    status.className = 'reading';
    status.textContent = book.readText;
    status.addEventListener('click', () => {
        book.toggleStatus();
        status.textContent = book.readText;
    });

    const deletee = document.createElement('button');
    deletee.className = 'delete';
    deletee.textContent = 'Delete';
    deletee.addEventListener('click', () => {
        book.deleteBook();
        card.remove();
    });

    card.appendChild(titlee);
    card.appendChild(spann);
    card.appendChild(authorr);
    card.appendChild(status);
    card.appendChild(deletee);
    document.querySelector('.books').appendChild(card);
    console.log(book.title);
}

function addBook() {
    if (titleInput.value === '' || authorInput.value === '') {
        alert('Fill in all the fields');
    } else {
        const newBook = new Book(titleInput.value, authorInput.value, readCheck.checked, Date.now());
        myLibrary.push(newBook);
        createCard(newBook);
        resetForm();
        dialogWindow.style.display = 'none';
    }
}

function resetForm() {
    titleInput.value = '';
    authorInput.value = '';
    readCheck.checked = false;
}
