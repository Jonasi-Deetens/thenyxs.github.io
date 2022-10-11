import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [books, setBooks] = useState({}); 

    useEffect(() => {
        fetch("/books")
        .then(res => res.json())
        .then(books => setBooks(books))
        console.log(books);
    }, []);

    return (
    <div>
        <p>{books.title}</p>
        <p>{books.review}</p>
    </div>
    );
}
export default BookList;