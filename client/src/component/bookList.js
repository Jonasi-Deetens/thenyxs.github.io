import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [books, setBooks] = useState({}); 

    useEffect(() => {
        fetch("/api/books")
         .then((res) => console.log(res));
       }, []);

    return (
        <div>
            <p>{books.title}</p>
            <p>{books.review}</p>
        </div>
    );
}
export default BookList;