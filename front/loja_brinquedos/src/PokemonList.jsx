import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaBox, FaTruck, FaUsers, FaChartBar, FaShoppingCart } from "react-icons/fa";
import { getCliente } from './Api.js';
import PokemonCard from './PokemonCard.jsx';
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Stack from 'react-bootstrap/Stack';
import Pesquisar from './componentes/Pesquisar.jsx';
import './App.css'

const PokemonList = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState(""); // Estado para o termo de pesquisa
    const [clientes, setClientes] = useState([]); // Lista de clientes

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        const response = await getCliente();
        setClientes(response);
    };

    // Filtrando clientes com base no nome digitado
    const clientesFiltrados = clientes.filter(cliente =>
        cliente.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className='col-md-3 col-lg-2 d-md-block bg-dark sidebar text-white p-3'>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="/cliente" className="nav-link text-white">
                                <FaUser className="me-2" /> Adicionar Clientes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">
                                <FaBox className="me-3" /> Editar Cliente
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link text-white">
                                <FaTruck className="me-3" /> Excluir Cliente
                            </a>
                        </li>
                    </ul>
                    <button className="btn btn-light mb-3" onClick={() => navigate("/")}>
                        <FaArrowLeft className="me-2" /> Home
                    </button>
                </nav>

                {/* Conteúdo Principal */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2 py-20 ">
                    <Pesquisar setSearchTerm={setSearchTerm} /> {/* Passando a função para atualizar o termo de pesquisa */}
                    <h2 className="mb-4 text-center">Lista Clientes</h2>
                    <div className="card mb-2">
                        <Stack gap={3}>
                            <div className="p-2">
                                {clientesFiltrados.length > 0 ? (
                                    clientesFiltrados.map(cliente => (
                                        <PokemonCard key={cliente.id_cliente} cliente={cliente} />
                                    ))
                                ) : (
                                    <p>Nenhum cliente encontrado.</p>
                                )}
                            </div>
                        </Stack>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default PokemonList;
