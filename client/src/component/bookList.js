import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [data, setDataS] = useState({}); 

    useEffect(async () => {
        const result = await fetch("/api/books", {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          )
         .then(setData(result.data));
       }, []);

    return (
        <div>
            <p>{books.title}</p>
            <p>{books.review}</p>
        </div>
    );
}
export default BookList;