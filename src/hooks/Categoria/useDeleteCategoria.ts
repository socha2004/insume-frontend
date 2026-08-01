import { categoriaService, type categoriaServiceData } from "../../services/categoriaService"
import { useState, useEffect } from "react";

interface UseDeleteCategoria {
    data: categoriaServiceData | null;
    loading: boolean;
    error: string | null;
    deleteCategoria: () => void;
}

export function useDeleteCategoria(): UseDeleteCategoria {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function deleteCategoria(id: number) {
        try {
            setLoading(true);
            setError(null);
            await categoriaService.deleteCategoria(id);
        }catch(e) {
             setError(e instanceof Error ? e.message : "Erro ao carregar dados");
        }finally{
            setLoading(false)
        }
    }

    //  useEffect(() => {
    //     deleteCategoria();
    // }, [id]);

    return { loading, error, deleteCategoria }
}