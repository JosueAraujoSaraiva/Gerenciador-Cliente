import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaBox, FaTruck, FaUsers, FaChartBar, FaShoppingCart } from "react-icons/fa";

import ListaCliente from "./componentes/ListaCliente.jsx";

const MenuPrincipal = () => {
  return (
    <div className="container-fluid">
      <div className="row ">
        
        <nav className="col-md-9 col-lg-2 d-md-block bg-dark sidebarList text-white p-3">
          <h4 className="text-center mb-4">SysManager</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="/cliente" className="nav-link text-white">
                <FaUser className="me-2" /> Gerenciar Clientes
              </a>
            </li>
          </ul>
        </nav>

        {/* Conteúdo Principal */}
        <main className="col-md-9 col-lg-10 px-md-4 py-4">
          <ListaCliente/>
          
        </main>
      </div>
    </div>
  );
};

export default MenuPrincipal;
