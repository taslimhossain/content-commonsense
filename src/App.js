import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'reactjs-popup/dist/index.css';
import './App.css';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Steps from './pages/Steps/Steps';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="steps/:step/:serviceid/:serviceslug" element={<Steps />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
