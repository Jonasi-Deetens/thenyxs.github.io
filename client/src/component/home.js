import React from 'react';
import logo from '../assets/logo.svg';
import BookList from '../fetches/bookList';
import SubmitBook from '../submitForms/SubmitBook';
  
const Home = () => {
    return (
        <div>
            <img src={logo} className="App-logo" alt="logo" />
            <BookList />
            <SubmitBook />
        </div>
    );
}
  
export default Home;