import { useState } from "react";
import { insumoService, type UpdateInsumoDTO } from "../../services/insumoService";

export function useUpdateInsumo() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function updateInsumo(id: number, data: UpdateInsumoDTO) {
        try {
            setLoading(true);
            await insumoService.updateInsumo(id, data);
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
    return {loading, error, updateInsumo}
}