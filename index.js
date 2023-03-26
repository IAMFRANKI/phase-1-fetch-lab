function fetchBooks() {
  return fetch("https://anapionficeandfire.com/api/books")
  .then(resp => resp.json())
  .then ((mine)=> {
    renderBooks(mine)
  })
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
