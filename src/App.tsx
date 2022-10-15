import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './home';
import Home2 from './home2';
import Location from './pages/location/Location';
import Main from './pages/main/Main';
import Setup from './pages/setup/Setup';
import Start from './pages/start/Start';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home2' element={<Home2/>}/>
        <Route path='/start' element={<Start/>}/>
        <Route path='/location' element={<Location/>} />
        <Route path='/main' element={<Main/>}/>
        <Route path='/setup' element={<Setup/>}/>
      </Routes>
    </div>
  );
}

export default App;
