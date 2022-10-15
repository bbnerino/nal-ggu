import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Link to={'/home2'}>
          <img src='/assets/sun.png' className='App-logo' alt='logo' />
          <div>Hello</div>
        </Link>
      </header>
    </div>
  );
}

export default Home;
