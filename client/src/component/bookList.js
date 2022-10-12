import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const books = ['yr'];

    useEffect( () => {
        fetch('/api/books')
        .then(result => result.json())
        .then(data => {
            console.log("data",data);
            books = new [data.json];
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