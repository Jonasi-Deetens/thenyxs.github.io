import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [books, setBooks] = useState({}); 

    useEffect(() => {
        fetch("/api/books")
        .then(res => res.json())
        .then(books => setBooks(books))
        console.log(books[0]);
    }, []);

    return (
    <div>
        <p>{books[0].title}</p>
        <p>{books[0].review}</p>
    </div>
    );
}
export default BookList;