import { useState } from "react";
import { categoriaService, type UpdateCategoriaDTO } from "../../services/categoriaService";

export function useUpdateCategoria() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function updateCategoria(id: number, titulo: UpdateCategoriaDTO) {
         try {
            setLoading(true);
            setError(null);
            await categoriaService.updateCategoria(id, titulo);

        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Erro ao atualizar categoria"
            );
        } finally {
            setLoading(false);
        }
    }

    return {
        updateCategoria,
        loading,
        error
    }
}