import './App.css';
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form1 from './pages/Form1';
import Event from './pages/Event';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pages/Form1" element={<Form1 />} />
        <Route path="pages/Event" element={<Event/>} />
      </Routes>
    </div>
  );
}