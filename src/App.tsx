import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as BrowserRouter, Route, Routes} from "react-router-dom";

import Navbar from './components/global/Navbar';
import Projects from './components/Projects';
import MediaTracking from './components/MediaTracking';
import Home from './components/Home';

import './App.css';

function App() {
  return (     
    <div className="App">
      <Navbar/>
      <div className="Container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/media-tracker" element={<MediaTracking/>} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
