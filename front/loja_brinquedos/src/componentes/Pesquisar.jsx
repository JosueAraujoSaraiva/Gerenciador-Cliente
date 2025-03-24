import { useState } from "react";
import { Container, Box, TextField } from "@mui/material";

export default function Pesquisar({ setSearchTerm }) {
    const [searchTerm, setLocalSearchTerm] = useState(""); // Estado local para o termo de pesquisa

    // Atualizando o estado global de pesquisa ao mudar o termo local
    const handleSearchChange = (e) => {
        const value = e.target.value;
        setLocalSearchTerm(value);
        setSearchTerm(value); // Atualiza o estado no componente Pai
    };

    return (
        <Container maxWidth="lg" sx={{ padding: "40px 0" }}>
            {/* Barra de pesquisa e botão */}
            <Box sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                justifyContent: "space-between",
                marginLeft: '110px'
               
            }}>
                <TextField
                    type="text"
                    placeholder="Busque por um cliente..."
                    value={searchTerm}
                    onChange={handleSearchChange} // Usando a função de mudança
                    sx={{
                        flex: 1,
                        width: "800px",
                        maxWidth: "800px",
                        borderRadius: "25px",
                        backgroundColor: "#fff",
                        boxShadow: "0px 3px 6px rgba(0,0,0,0.1)",
                        transition: "0.3s",

                        "& .MuiOutlinedInput-root": {
                            borderRadius: "25px",
                            "&:hover fieldset": { borderColor: "#ff6f61" },
                            "&.Mui-focused fieldset": { borderColor: "#d32f2f", borderWidth: "2px" },
                        },
                    }}
                />
            </Box>
        </Container>
    );
}