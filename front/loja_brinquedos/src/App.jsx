import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import PokemonList from './ClienteLista';
import EditarCliente from './componentes/EditarCliente';
import Inicio from './Inicio';
import AdicionarCliente from './componentes/AdicionarCliente';

const App = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={< Inicio/>} />
    <Route path="/cliente" element={< PokemonList/>} />
    <Route path="/editar/:id" element={< EditarCliente/>} />
    <Route path="/adicionar" element={< AdicionarCliente/>} />

   </Routes>
  </Router>
 );
};
export default App;