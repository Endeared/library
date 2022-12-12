let container2 = document.getElementById('books');
let btn = document.getElementById("btn");
btn.addEventListener('click', event => {
    addBookToLibrary();
})

function addBookToLibrary() {
    let book = window.prompt("Input a book title!");
    let author = window.prompt("Input the author!");
    let pages = window.prompt("Input the number of pages!");
    let container = document.createElement("div")
    container2.appendChild(container);
    container.className = "cardClass"
    let ele1 = document.createElement("div")
    ele1.innerHTML += book;
    ele1.className = "book";
    container.appendChild(ele1)
    let ele2 = document.createElement("div")
    ele2.innerHTML += author;
    ele2.className = "author";
    container.appendChild(ele2)
    let ele3 = document.createElement("div")
    ele3.innerHTML += pages;
    ele3.className = "pages";
    container.appendChild(ele3)
    let ele4 = document.createElement("button")
    ele4.innerHTML += "Remove";
    ele4.className = "remove";
    container.appendChild(ele4)
    ele4.addEventListener('click', event => {
        ele4.parentElement.remove();
    })
}
