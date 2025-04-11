

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCliente } from "../Api.js";
import "../App.css";

export default function AdicionarCliente() {
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
        endereco: ""
    });

    const formatCPF = (cpf) => {
        cpf = cpf.replace(/\D/g, "");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return cpf;
    };

    const formatTelefone = (telefone) => {
        telefone = telefone.replace(/\D/g, "");
        telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, "($1) $2$3-$4");
        return telefone;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "cpf") {
            setCliente({ ...cliente, cpf: formatCPF(value) });
        } else if (name === "telefone") {
            setCliente({ ...cliente, telefone: formatTelefone(value) });
        } else {
            setCliente({ ...cliente, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const sucesso = await createCliente(cliente);
        if (sucesso) {
            alert("Cliente cadastrado com sucesso!");
            navigate("/cliente"); // ou outro caminho da sua lista de clientes
        } else {
            alert("Erro ao cadastrar cliente.");
        }
    };

    return (
        <div className="container mt-5 editar">
            <h2 className="mb-4 text-center">
                Adicionar Cliente
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Nome:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nome"
                        value={cliente.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">CPF:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="000.000.000-00"
                        name="cpf"
                        value={cliente.cpf}
                        onChange={handleChange}
                        maxLength={14}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={cliente.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telefone:</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="(XX) 9XXXX-XXXX"
                        name="telefone"
                        value={cliente.telefone}
                        onChange={handleChange}
                        maxLength={15}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Endereço:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="endereco"
                        value={cliente.endereco}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Cadastrar Cliente
                </button>
            </form>
        </div>
    );
}
