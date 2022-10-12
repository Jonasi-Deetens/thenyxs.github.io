const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reactDB');

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

const app = express();

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/api/books", function(req, res) {
  console.log("Inside getter")
  Book.find({}, function(err, foundBooks) {
    console.log(foundBooks.length )
    if (foundBooks.length === 0) {
      Book.insertMany([book1, book2], function(err){
        if (err) {
          console.log(err);
        } else {
          console.log("Succesfully inserted Books.")
        }
      });
      res.redirect("/");
    } else {
      return res.json({
        books: foundBooks
      })
    }
  });

});

app.listen(3001, () => {
  console.log('Server is running on port: 3001');
});