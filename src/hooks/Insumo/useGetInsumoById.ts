import { insumoService, type insumoServiceData } from "../../services/insumoService";
import { useState, useEffect } from "react";

interface UseInsumoResult {
    data: insumoServiceData | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export function useGetInsumoById(id: number): UseInsumoResult {
    const [data, setData] = useState<insumoServiceData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchData() {
        try {
            setLoading(true);
            setError(null);
            const result = await insumoService.getInsumoById(id);
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