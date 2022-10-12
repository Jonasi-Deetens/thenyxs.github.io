import React from 'react';
import { useState, useEffect } from 'react';
  
const BookList = () => {
    const [books, setBooks] = useState({}); 
    const items = [];

    useEffect(() => {
        fetch("/api/books")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    });

    return (
        <div>
            <p>{items[0].title}</p>
            <p>{items.review}</p>
        </div>
    );
}
export default BookList;