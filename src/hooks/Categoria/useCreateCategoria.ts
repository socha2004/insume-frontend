import { useState } from "react";
import { categoriaService } from "../../services/categoriaService";
import { useAuth } from "../../context/AuthContext";

export function useCreateCategoria() {
    const {usuario} = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function createCategoria(titulo: string) {
        

        try {

            setLoading(true);
            setError(null);

            await categoriaService.createCategoria({
                titulo,
                UsuarioId: Number(usuario.id)
            });

        } catch (err) {

            setError(
                err instanceof Error
                    ? err.message
                    : "Erro ao cadastrar categoria"
            );

        } finally {

            setLoading(false);

        }

    }

    return {
        createCategoria,
        loading,
        error
    }

}