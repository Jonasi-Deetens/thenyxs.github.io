import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [data, setData] = useState({}); 

    useEffect(async () => {
        fetch('/api/books')
        .then(result => result.json())
        .then(data => {
            console.log("data",data);
        });
    }, []);

    return (
        <div>
            <p>{data.title}</p>
            <p>{data.review}</p>
        </div>
    );
}
export default BookList;