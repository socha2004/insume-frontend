import { useParams } from "react-router-dom"
import { useViewCategoria } from "../../../hooks/Categoria/useViewCategoria";
import { EditCategoryForm } from "../..";

export const EditCategory = () => {
    const { id } = useParams<{ id: string }>();
    const {data, error, loading, refetch} = useViewCategoria(id)
        
    return (
        <div className="p-4 flex flex-col items-center">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Visualizar/Atualizar Categoria</h1>
            </div>

            <div className="mt-4 p-4 rounded-lg shadow-md border-gray-300 border-1 w-[fit-content]">
                <EditCategoryForm data={data} error={error} loading={loading}/>
            </div>
        </div>
    )
}