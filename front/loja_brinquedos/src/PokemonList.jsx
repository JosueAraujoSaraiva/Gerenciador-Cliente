import React, { useEffect, useState } from 'react';

import { getCliente } from './Api.js';
import PokemonCard from './PokemonCard.jsx';

const PokemonList = () => {
    const [cliente, setPokemons] = useState([]);
    useEffect(() => {
        fetchPokemons();
    }, []);
    
    const fetchPokemons = async () => {
        const response = await getCliente();
        setPokemons(response);
    };

    return (
        <div className="app">
            <h1>Lista de Cliente</h1>
            <div className="pokemon-list">
                {cliente.map((cliente) => (
                    <PokemonCard key={cliente.id_cliente} cliente={cliente} />
                ))}
            </div>
        </div>
    );
};
export default PokemonList;