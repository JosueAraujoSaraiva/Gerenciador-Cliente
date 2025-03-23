import React from 'react';
import Pesquisar from './componentes/Pesquisar.jsx';

const PokemonCard = ({ cliente }) => {
   return (
      <div className="cliente-card">

         <div className="client-info">
           
            <p><strong>ID:</strong> {cliente.id_cliente}</p>
            <p><strong>Nome:</strong> {cliente.nome}</p>
            <p><strong>Cpf:</strong> {cliente.cpf}</p>
            <p><strong>email:</strong> {cliente.email}</p>
            <p><strong>Telefone:</strong> {cliente.telefone}</p>
            <p><strong>Endereço:</strong> {cliente.endereco}</p>
        

         </div>
      </div>
   );
};
export default PokemonCard;