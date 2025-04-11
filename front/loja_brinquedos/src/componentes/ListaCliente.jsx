import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { getCliente } from "../Api.js";
import Stack from "react-bootstrap/Stack";

import Pesquisar from "./Pesquisar.jsx";
import PokemonCard from "../PokemonCard.jsx";
import "../App.css";

export default function ListaCliente() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [clientes, setClientes] = useState([]);


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



    return (

        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2 py-20 main-classe">
            <Pesquisar setSearchTerm={setSearchTerm} />
            <h2 className="mb-8" style={{ marginLeft: "400px" }} >Clientes Cadastrado</h2>

            <div className="card mb-2">
                <Stack gap={3}>
                    <div className="p-2">
                        {clientesFiltrados.length > 0 ? (
                            clientesFiltrados.map(cliente => (
                                <div key={cliente.id_cliente} className="d-flex align-items-center">
                                    
                                <PokemonCard className="cardLista" cliente={cliente} />
                                </div>
                            ))
                        ) : (
                            <p className="mb-4 text-center">Nenhum cliente encontrado.</p>
                        )}
                    </div>
                </Stack>
            </div>
        </main>
            
    );
}