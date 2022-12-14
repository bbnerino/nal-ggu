import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Main from './pages/main/Main';
import Setup from './pages/setup/Setup';
import Start from './pages/start/Start';

function App() {
  return (
    <Wrapper>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/setup' element={<Setup/>}/>
      </Routes>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  max-width: 47rem;
  min-width: 22rem;
  margin: auto;
  background-color: #fff;
`
export default App;
