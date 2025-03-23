import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import PokemonList from './PokemonList';
import Inicio from './Inicio';

const App = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={< Inicio/>} />
    <Route path="/cliente" element={< PokemonList/>} />
   </Routes>
  </Router>
 );
};
export default App;