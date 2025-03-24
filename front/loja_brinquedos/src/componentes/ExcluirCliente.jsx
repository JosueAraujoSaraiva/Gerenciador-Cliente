import { FaTruck } from "react-icons/fa";
import { deleteCliente } from "../Api.js"; // Verifique se o caminho está correto

export default function ExcluirCliente({ selectedClientes, setClientes }) { // Props já fornecem os estados corretos

    const deleteSelectedClientes = async () => {
        if (selectedClientes.length === 0) {
            alert("Selecione pelo menos um cliente para excluir.");
            return;
        }

        if (!window.confirm("Tem certeza que deseja excluir os clientes selecionados?")) return;

        for (const id of selectedClientes) {
            const sucesso = await deleteCliente(id);
            if (!sucesso) {
                alert(`Erro ao excluir cliente ${id}`);
                return;
            }
        }

        // Atualiza a lista de clientes após excluir do banco
        setClientes(prev => prev.filter(cliente => !selectedClientes.includes(cliente.id_cliente)));
    };

    return (
        <button
            className="nav-link text-white"
            onClick={deleteSelectedClientes}
        >
            <FaTruck className="me-3" /> Excluir Cliente
        </button>
    );
}