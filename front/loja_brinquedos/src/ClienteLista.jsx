import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaHome, FaArrowLeft,FaEdit } from "react-icons/fa";
import { getCliente } from "./Api.js";
import Stack from "react-bootstrap/Stack";

import Pesquisar from "./componentes/Pesquisar.jsx";
import ExcluirCliente from "./componentes/ExcluirCliente.jsx";
import PokemonCard from "./PokemonCard.jsx";
import "./App.css";

export default function ClienteLista() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [clientes, setClientes] = useState([]);
    const [selectedClientes, setSelectedClientes] = useState([]); 

    useEffect(() => {
        fetchClientes();
    }, []);

    const fetchClientes = async () => {
        const response = await getCliente();
        setClientes(response);
    };

    const clientesFiltrados = clientes.filter(cliente =>
        cliente.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelect = (id) => {
        setSelectedClientes((prev) =>
            prev.includes(id) ? prev.filter(clienteId => clienteId !== id) : [...prev, id]
        );
    };

    const handleEdit = () => {
        if (selectedClientes.length === 0) {
            alert("Selecione um cliente para editar.");
            return;
        }
        navigate(`/editar/${selectedClientes[0]}`); // Redireciona para a edição do primeiro cliente selecionado
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar text-white p-3">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a href="/adicionar" className="nav-link text-white">
                                <FaUser className="me-3" /> Adicionar Clientes
                            </a>
                        </li>
                        <li className="nav-item">
                            <ExcluirCliente selectedClientes={selectedClientes} setClientes={setClientes} />
                        </li>
                        <li className="nav-item">
                            <button className="nav-link text-white" onClick={handleEdit}>
                                <FaEdit className="me-3" /> Editar Cliente
                            </button>
                        </li>
                    </ul>
                    <button className="btn btn-light mb-3" onClick={() => navigate("/")}>
                        
                        <FaHome className="me-2" /> Home
                    </button>
                </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2 py-20 main-classe">
                    <Pesquisar setSearchTerm={setSearchTerm} />
                    <h2 className="mb-4 text-center lista-cliente">Lista de Clientes</h2>

                    <div className="card mb-2">
                        <Stack gap={3}>
                            <div className="p-2">
                                {clientesFiltrados.length > 0 ? (
                                    clientesFiltrados.map(cliente => (
                                        <div key={cliente.id_cliente} className="d-flex align-items-center">
                                            <input
                                                type="checkbox"
                                                className="me-2"
                                                checked={selectedClientes.includes(cliente.id_cliente)}
                                                onChange={() => handleSelect(cliente.id_cliente)}
                                            />
                                            <PokemonCard cliente={cliente} />
                                        </div>
                                    ))
                                ) : (
                                    <p className="mb-4 text-center">Nenhum cliente encontrado.</p>
                                )}
                            </div>
                        </Stack>
                    </div>
                </main>
            </div>
        </div>
    );
}