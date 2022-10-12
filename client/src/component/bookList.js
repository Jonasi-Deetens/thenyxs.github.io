import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    let [books, setBooks] = useState([]);

    useEffect( () => {
        fetch('/api/books')
        .then(result => result.json())
        .then(data => {
            console.log("data",data);
            books = setBooks(data.books);
            console.log("data",books);
        });
    }, []);

    return (
        <div>
            {books.map(({ title, review }) => (
                <p> {title}'s birthday is on {review} </p>
            ))}
        </div>
    );
}
export default BookList;