function createLibrary(name) {
  return library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
};

function addBook(library, book) {
  return library["shelves"][book["genre"]].push(book);
 };

function checkoutBook(library, bookTitle, genre) {
  var userAlert = `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
    for (var i = 0; i < library["shelves"][genre].length; i++) {
    //console.log(library["shelves"][genre][i]);
    if (library["shelves"][genre][i]["title"] === bookTitle) {
      library["shelves"][genre].pop();
      userAlert = `You have now checked out ${bookTitle} from the ${library.name}` }
   }
   return userAlert;
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
