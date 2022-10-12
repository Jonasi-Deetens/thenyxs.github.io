import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [data, setData] = useState({}); 

    useEffect(async () => {
        const result = await fetch("/api/books", {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          },
          )
          setData(result.data);
       }, []);

    return (
        <div>
            <p>{data.title}</p>
            <p>{data.review}</p>
        </div>
    );
}
export default BookList;