function createTitle(title) {
  return "The " + title;
};

function buildMainCharacter(name, age, pronouns) {
  return character = {
    name: name,
    age: age,
    pronouns: pronouns,
  }
};

var reviewArr = [];

function saveReview(review, reviews) {
  if (reviews.includes(review)){
    return "Please add an original review."
  } else {
  return reviews.push(review);
}
};

function calculatePageCount(title) {
  return title.length * 20;
};

//console.log(calculatePageCount("The"));

function writeBook(title, bookCharacter, genre) {
  return book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(title),
    genre: genre,
  }
};

function editBook(book) {
  book.pageCount = book.pageCount * .75;
  return book.pageCount;
};


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
