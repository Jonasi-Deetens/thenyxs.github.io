import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    let [books, setBooks] = useState([]);
    
    useEffect( () => {
        fetch('/api/getAllBooks')
        .then(result => result.json())
        .then(data => {
            books = setBooks(data.books);
        });
    }, []);
    
    return (
        <div>
        {
            React.Children.toArray(
                books.map(({ title, review }) => (
                    <p> {title} {review} </p>
                ))
            )
        }
        </div>
    );
}
export default BookList;