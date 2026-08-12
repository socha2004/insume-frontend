import { useParams } from "react-router-dom"
import { useGetInsumoById } from "../../../hooks/Insumo/useGetInsumoById"
import { Spinner, EditInsumeForm } from "../.."

export const EditInsumo = () => {
    const { id } = useParams();
    const { data, loading, error, refetch } = useGetInsumoById(Number(id));

    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <p>Erro: {error}</p>
    }

    return (
        <div className="p-4 flex flex-col items-center">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Visualizar/Atualizar Insumo</h1>
            </div>

            <div className="mt-4 p-4 rounded-lg shadow-md border-gray-300 border bg-white">
                <EditInsumeForm data={data} loading={loading} error={error} />
            </div>
        </div>
    )
}