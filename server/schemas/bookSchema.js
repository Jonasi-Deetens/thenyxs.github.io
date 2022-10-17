const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: String,
  review: String
});

const Book = new mongoose.model("Book", bookSchema);

module.exports = {
  findAllBooks : function() {

    var query = Book.find({})
    return query;

  },

  addBook : function(json) {
    
    var bookData = JSON.parse(json)
    Book.create({
      title : bookData.title,
      review : bookData.review
    })

  }
};

