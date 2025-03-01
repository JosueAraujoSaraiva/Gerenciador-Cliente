const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());

// Rota para listar todos os Cliente
app.get('/cliente', async (req, res) => {
    const cliente = await prisma.Cliente.findMany();
    res.json(cliente);
});


// Rota para adicionar um novo cliente
app.post('/Cliente', async (req, res) => {
    const { nome, cpf, email, telefone, endereco } = req.body;
    try {
        const novoCliente = await prisma.Cliente.create({
            data: { nome, cpf, email, telefone, endereco }
        });
        res.json(novoCliente);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Erro ao adicionar cliente' });
    }
});

// Rota para atualizar um Pokémon
app.put('/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, tipo, raridade, preco, img_url } = req.body;
    try {
        const atualizado = await prisma.pokemon.update({
            where: { id: parseInt(id) },
            data: { nome, tipo, raridade, preco, img_url }
        });
        res.json(atualizado);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Erro ao atualizar Pokémon' });
    }
});

// Rota para deletar um Pokémon
app.delete('/pokemons/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletado = await prisma.pokemon.delete({
            where: { id: parseInt(id) }
        });
        res.json(deletado);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Erro ao deletar Pokémon' });
    }
});

// Populando o banco de dados com Pokémons de exemplo
app.get('/pokemons/populate', async (req, res) => {
    try {
        const dados = [
            { nome: 'Pikachu', tipo: 'Elétrico', raridade: 'Comum', preco: 300 },
            { nome: 'Charmander', tipo: 'Fogo', raridade: 'Comum', preco: 200 },
            { nome: 'Squirtle', tipo: 'Água', raridade: 'Comum', preco: 200 },
            { nome: 'Bulbasaur', tipo: 'Planta', raridade: 'Comum', preco: 200 },
            { nome: 'Mewtwo', tipo: 'Psíquico', raridade: 'Raro', preco: 1000 },
        ];
        const pokemonsCriados = await prisma.pokemon.createMany({ data: dados });
        res.json(pokemonsCriados);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Erro ao popular banco de dados' });
    }
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
