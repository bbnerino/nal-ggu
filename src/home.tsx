import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={'/home2'} >
          <h1 style={{"color":"white"}}>날꾸</h1>
          <img src='/assets/sun.png' className="App-logo" alt="logo" />
        </Link>
      </header>
    </div>
  );
}

export default Home;
