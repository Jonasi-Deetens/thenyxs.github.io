const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createPool({
    host: 'localhost', // the host name MYSQL_DATABASE: node_mysql
    user: 'react', // database user MYSQL_USER: MYSQL_USER
    password: 'Fl4shback321!', // database user password MYSQL_PASSWORD: MYSQL_PASSWORD
    database: 'reactdb' // database name MYSQL_HOST_IP: mysql_db
  })

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
    
  });

app.get('/get', (req, res) => {
    const SelectQuery = " SELECT * FROM books_reviews";
    db.query(SelectQuery, (err, result) => {
    res.send(result)
    })
})

app.listen('3001', () => { })