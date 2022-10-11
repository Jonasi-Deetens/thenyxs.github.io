import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [book, setBook] = useState({}); 

    useEffect(() => {
        fetch("/home")
        .then(res => res.json())
        .then(book => setBook(book))
    }, []);

    return (
    <div>
        <p>{book.title}</p>
        <p>{book.review}</p>
    </div>
    );
}
export default BookList;