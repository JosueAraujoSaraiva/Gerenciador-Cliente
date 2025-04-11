import React from 'react';

const PokemonCard = ({ cliente }) => {
   return (
      <div className="cliente-card">

         <div className="client-info">
           
            <p className='id'><strong>ID:</strong><br /> {cliente.id_cliente}</p>
            <p className='nome'><strong>Nome:</strong><br /> {cliente.nome}</p>
            <p className='cpf'><strong>Cpf:</strong><br /> {cliente.cpf}</p>
            <p className='email'><strong>Email:</strong><br /> {cliente.email}</p>
            <p className='telefone'><strong>Telefone:</strong><br /> {cliente.telefone}</p>
            <p className='endereco'><strong>Endereço:</strong><br /> {cliente.endereco}</p>
        

         </div>
      </div>
   );
};
export default PokemonCard;