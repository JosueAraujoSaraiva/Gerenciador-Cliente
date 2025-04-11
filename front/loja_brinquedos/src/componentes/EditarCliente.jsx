import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCliente, updateCliente } from "../Api.js";
import { FaArrowLeft } from "react-icons/fa";
import "../App.css";

export default function EditarCliente() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        email: "",
        telefone: "",
        endereco: ""
    });

    useEffect(() => {
        fetchCliente();
    }, []);

    const fetchCliente = async () => {
        const response = await getCliente(id);
        setCliente(response);
    };

    // Função para formatar CPF
    const formatCPF = (cpf) => {
        cpf = cpf.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o ponto
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2"); // Adiciona o segundo ponto
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o traço
        return cpf;
    };

    // Função para formatar telefone
    const formatTelefone = (telefone) => {
        telefone = telefone.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
        telefone = telefone.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, "($1) $2$3-$4"); // Adiciona os parênteses e traço
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
        const sucesso = await updateCliente(id, cliente);
        if (sucesso) {
            alert("Cliente atualizado com sucesso!");
            navigate("/cliente");
        } else {
            alert("Erro ao atualizar cliente.");
        }
    };

    return (
        <div className="container mt-5 editar">
          
            <h2 className="mb-4 text-center">Editar Cliente</h2>
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
                    Salvar Alterações
                </button>
            </form>
        </div>
    );
}
