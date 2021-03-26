var sciFiShelf = [];

function shelfBook(book, shelf) {
  if (book.genre === "sciFi" && shelf.length < 3) {
    return shelf.unshift(book);
  }
};

function unshelfBook(book, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      var shelfSpot = shelf.indexOf(shelf[i]);
      shelf.splice(shelfSpot, 1);
    }
  }
  return shelf;
};

function listTitles(genreShelf) {
  var titles = [];
  for (var i = 0; i < genreShelf.length; i++) {
    titles.push(genreShelf[i].title);
  }
  return titles.join(", ");
};

function searchShelf(shelf, book) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book.title) {
      return true
    } else {
      return false
    }
  }
};

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
