import { useGetInsumoById } from "../../../hooks/Insumo/useGetInsumoById"
import { useParams } from "react-router-dom"
import { Spinner, DeleteInsumeForm } from "../.."

export const DeleteInsumo = () => {
    const { id } = useParams();
    const { data, loading, error, refetch } = useGetInsumoById(Number(id));

    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <p>Erro ao carregar insumo: {error}</p>
    }
    return (
        <div className="p-4 flex flex-col items-center">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Deletar Insumo</h1>
            </div>

            <div className="mt-4 p-4 rounded-lg shadow-md border-gray-300 border bg-white">
                <DeleteInsumeForm data={data} loading={loading} error={error} />
            </div>
        </div>
    )
}