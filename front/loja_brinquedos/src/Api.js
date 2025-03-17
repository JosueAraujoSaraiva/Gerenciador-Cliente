import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000', // Substitua pela URL da sua API
});

// Busca todos os Clientes
export const getCliente = async () => {
    const response = await api.get('/cliente');
    return response.data;
  };
  
  // Cria um novo Cliente
  export const createCliente = async (cliente) => {
    const response = await api.post('/cliente', cliente);
    return response.data;
  };
  
  // Atualiza um Cliente existente pelo ID
  export const updateCliente = async (id, cliente) => {
    const response = await api.put(`/cliente/${id}`, cliente);
    return response.data;
  };
  
  // Exclui um Cliente pelo ID
  export const deleteCliente = async (id) => {
    const response = await api.delete(`/cliente/${id}`);
    return response.data;
  };

//export const getCart = () => api.get('/carrinho');
//export const addToCart = (idPokemon) => api.post(`/carrinho/${idPokemon}`);
//export const removeFromCart = (idPokemon) => api.delete(`/carrinho/${idPokemon}`);
//export const checkout = () => api.post('/vendas');

export default api;