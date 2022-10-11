import React, { useEffect, useState } from "react";
 
const Book = (props) => (
    <div>
        <p>{props.book.name}</p>
        <p>{props.book.review}</p>
    </div>
);

export default function BookList() {
    const [books, setBooks] = useState([]);
    
    // This method fetches the records from the database.
    useEffect(() => {
      async function getBooks() {
        const response = await fetch(`http://localhost:5000/book/`);
    
        if (!response.ok) {
          const message = `An error occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const books = await response.json();
        setBooks(books);
      }
    
      getBooks();
    
      return;
    }, [books.length]);
    
    // This method will map out the records on the table
 function bookList() {
    return books.map((book) => {
      return (
        <Book
          book={book}
          key={book._id}
        />
      );
    });
  }
  
  // This following section will display the table with the records of individuals.
  return (
    <div>
        <h3>Book List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
        <div>
            <p>Name</p>
            <p>Review</p>
        </div>
        <tbody>{bookList()}</tbody>
      </table>
    </div>
  );
 }