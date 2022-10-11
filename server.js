const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/reactdb", { useNewUrlParser: true });

const bookSchema = new mongoose.Schema ({
    name: String,
    review: String
});

const Book = mongoose.model("Book", bookSchema); // converts to "books" in db collections

const book = new Book({
    name: "Test",
    review: "This shit works!"
});

book.save();