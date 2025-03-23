import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaBox, FaTruck, FaUsers, FaChartBar, FaShoppingCart } from "react-icons/fa";

const MenuPrincipal = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar text-white p-3">
          <h4 className="text-center mb-4">FARMÁCIA</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a href="/cliente" className="nav-link text-white">
                <FaUser className="me-2" /> Gerenciar Clientes
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaBox className="me-2" /> Gerenciar Mercadoria
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaTruck className="me-2" /> Gerenciar Fornecedor
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaUsers className="me-2" /> Gerenciar Funcionário
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaChartBar className="me-2" /> Gerenciar Relatório
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-white">
                <FaShoppingCart className="me-2" /> Gerenciar Vendas
              </a>
            </li>
          </ul>
        </nav>

        {/* Conteúdo Principal */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
          <h2 className="mb-4">Últimas Notícias</h2>
          <div className="card mb-3">
            <img
              src="https://source.unsplash.com/600x300/?medicine,pills"
              className="card-img-top"
              alt="Notícia 1"
            />
            <div className="card-body">
              <h5 className="card-title">Pedido de supermercados para vender remédio provoca briga</h5>
              <p className="card-text text-muted">Danilo Moliterno da CNN - 26/01/2025 às 03:30</p>
            </div>
          </div>
          <div className="card">
            <img
              src="https://source.unsplash.com/600x300/?pharmacy,drugs"
              className="card-img-top"
              alt="Notícia 2"
            />
            <div className="card-body">
              <h5 className="card-title">Por que grandes redes de farmácia nos EUA estão fechando lojas</h5>
              <p className="card-text text-muted">Nathaniel Meyersohn da CNN - 19/10/2023 às 14:53</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MenuPrincipal;
