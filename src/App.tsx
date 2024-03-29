import React from 'react';
import Button from '@mui/material/Button';
import SignIn from './pages/SignIn';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;