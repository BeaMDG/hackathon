import './App.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ShowProducts } from './Components/ShowProducts';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<ShowProducts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


