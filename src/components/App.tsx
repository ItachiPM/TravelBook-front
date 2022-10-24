import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from './views/LoginView/LoginView';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginView />} />
    </Routes>
  );
}

export default App;
