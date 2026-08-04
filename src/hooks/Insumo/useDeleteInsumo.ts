import {insumoService, type insumoServiceData} from "../../services/insumoService";
import { useState } from "react";

interface UseDeleteInsumo {
    data: insumoServiceData | null;
    loading: boolean;
    error: string | null;
    deleteInsumo: (id: number) => void;
}

export function useDeleteInsumo(): UseDeleteInsumo {
    const [data, setData] = useState<insumoServiceData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const deleteInsumo = async (id: number) => {
        setLoading(true);
        setError(null);

        try {
            const response = await insumoService.deleteInsumo(id);
            setData(response);
        } catch (err) {
            setError("Erro ao deletar insumo", err.message);
        } finally {
            setLoading(false);
        }
    };

    return { data, loading, error, deleteInsumo };
}