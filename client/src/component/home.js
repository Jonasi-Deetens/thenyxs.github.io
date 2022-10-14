import React from 'react';
import logo from '../assets/logo.svg';
import BookList from './bookList';
  
const Home = () => {
    return (
        <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <BookList />
        </div>
    );
}
  
export default Home;