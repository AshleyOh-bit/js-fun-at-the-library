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

function saveReview(review, reviewArr) {
  if (reviewArr.includes(review)){
    console.log("Please add an original review.")
  } else {
  return reviewArr.push(review);
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
