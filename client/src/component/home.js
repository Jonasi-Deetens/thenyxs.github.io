import React from 'react';
import logo from '../logo.svg';
import BookList from './bookList';
  
function Home (){
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <BookList />
        </div>
    );
}
  
export default Home;