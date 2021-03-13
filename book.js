let myLibrary = [];

const submitBook = (e) =>{
     // Declare vars and grab value of user input
    let inTitle = document.getElementById('title').value;
    let inAuthor = document.getElementById('author').value;
    let inNumberPages = document.getElementById('numPages').value;
    let read = document.getElementById('read').value;
    let NotRead = document.getElementById('notRead').value;

// function to create new object and populate it values with user input
    function Book(title, author, numberPages, readOrNot){
        this.title = inTitle;
        this.author = inAuthor;
        this.numberPages = inNumberPages;
        this.read = read;
        this.status = function(){
            return title, author, 
            numberPages, readOrNot   
        }
    
    
    }
myLibrary.push(Book);
// save to local storage
localStorage.setItem('MyBookList', JSON.stringify(movies, '\t',2) );
console.log(myLibrary)

document.getElementById('submit').onclick = function submitBook(e){
    
};

document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMovie);
});
