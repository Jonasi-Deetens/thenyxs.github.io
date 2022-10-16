const express = require('express');
const cors = require('cors');

const db = require('./dbconnection');
db.connect();

const book = require('./schemas/bookSchema');

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/api/getBooks", function(req, res) {

  var query = book.findBooks();
  query.exec(function(err,foundBooks){
    if(err)
      return console.log(err);
    return res.json({
      books: foundBooks
    })
  });

});

app.get("/api/addBooks", function(req, res) {

  book.insertManyBooks();

});

app.listen(3001, () => {
  console.log('Server is running on port: 3001');
});