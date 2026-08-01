import { categoriaService, type categoriaServiceData } from "../../services/categoriaService";
import { useState, useEffect } from "react";

interface UseCategoriaResult {
    data: categoriaServiceData | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useViewCategoria(id: number): UseCategoriaResult {
    const [data, setData] = useState<categoriaServiceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchData() {
        try {
            setLoading(true);
            setError(null);
            const result = await categoriaService.getCategoriaId(id);
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : "Erro ao carregar dados");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    return { data, loading, error, refetch: fetchData }

}