class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(patronName, isMorning) {
    if (isMorning) {
      return `Good morning, ${patronName}!`
    } else {
      return `Hello, ${patronName}!`
    }
  }

  findBook(bookTitle) {
    var isOnShelf;
    var userAlert;
    for (var i = 0; i < library["shelves"]["fantasy"].length; i++) {
      if (library["shelves"]["fantasy"][i]["title"] === bookTitle) {
      isOnShelf = true;
      }
    }
    if (isOnShelf) {
     library["shelves"]["fantasy"].pop();
     return userAlert = `Yes, we have ${bookTitle}`
    } else {
     return  userAlert = `Sorry, we do not have ${bookTitle}`
    }
  }

  calculateLateFee(daysLate) {
    return Math.ceil(daysLate * 0.25)
  }
  
};

module.exports = Librarian;
