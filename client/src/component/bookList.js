import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [books, setBooks] = useState({}); 

    useEffect(() => {
        fetch("http://localhost:3001/api/books")
        .then(res => res.json())
        .then(books => setBooks(books))
        console.log(books[0]);
    }, []);

    return (
    <div>
        <p>{books.title}</p>
        <p>{books.review}</p>
    </div>
    );
}
export default BookList;