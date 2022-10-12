import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const books = [];

    useEffect( () => {
        fetch('/api/books')
        .then(result => result.json())
        .then(data => {
            console.log("data",data);
            books = data.books;
        });
    }, []);

    return (
        <div>
            <p>{books[0].title}</p>
            <p>{books[0].review}</p>
        </div>
    );
}
export default BookList;