const express = require('express');
const cors = require('cors');

const db = require('./dbconnection');
db.connect();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

const book = require('./schemas/bookSchema');

app.get("/api/getAllBooks", function(req, res) {

  var query = book.findAllBooks();
  query.exec(function(err,foundBooks){
    if(err)
      return console.log(err);
    return res.json({
      books: foundBooks
    })
  });

});

app.post("/api/addBook", function(req, res) {
  
  if (req.body.json != null) {
    book.addBook(req.body.json);
    return res.json({ status : "Succesfully add a new book to the DB." })
  } else return res.json({ status : "Failed to add empty book object to DB." })

});

app.listen(3001, () => {
  console.log('Server is running on port: 3001');
});