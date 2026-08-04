import { insumoService, type CreateInsumoDTO } from "../../services/insumoService";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export const useCreateInsumo = () => {
    const { usuario } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function createInsumo(data: CreateInsumoDTO) {
        try {
            setLoading(true);
            setError(null);

            await insumoService.createInsumo({
                ...data,
                idUsuario: Number(usuario.id)
            });
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : "Erro ao cadastrar insumo"
            );
        } finally {
            setLoading(false);
        }

    }
    return {loading, error, createInsumo};
}