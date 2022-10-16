const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  review: String
});

const Book = new mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "Congratulations:",
  review: "You have set up your first MERN Stack!"
});

const book2 = new Book({
  title: "Step 2:",
  review: "Make a secure https link available."
});

const books = [book1, book2];


module.exports = {
  findBooks : function() {

    var books = Book.find({})
    return books;

  },

  insertManyBooks : function(bookArray) {
    if (books != null) {
      Book.insertMany(books, function(err){
        if (err) {
          console.log(err)
        } else {
          console.log("Succesfully inserted Books.")
        }
      });
    }
  }
};

