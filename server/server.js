const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reactDB');

const bookSchema = new mongoose.Schema({
  title: String,
  review: String
});

const Book = new mongoose.model("Book", bookSchema);

const book1 = new Book({
  title: "Test title1",
  review: "This is awesome"
});

const book2 = new Book({
  title: "Test title2",
  review: "This is 2 awesome"
});

const app = express();

app.use(cors({ origin: true }));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/api/books", async(req, res) => {
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