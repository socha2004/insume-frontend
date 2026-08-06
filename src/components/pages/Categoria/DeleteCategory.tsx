import { useParams } from "react-router-dom"
import { DeleteCategoryForm } from "../../molecules/Categoria/DeleteCategoryForm";
import { useViewCategoria } from "../../../hooks/Categoria/useViewCategoria";

export const DeleteCategory = () => {
    const { id } = useParams<{ id: string }>();
    const {data, error, loading, refetch} = useViewCategoria(id)

    return (
        <div className="p-4 flex flex-col items-center">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Excluir Categoria</h1>
            </div>

            <div className="mt-4 p-4 rounded-lg shadow-md border-gray-300 border max-w-[50%] w-fit bg-white">
                <p className="text-red-400 text-[0.875rem]  text-center">* Atenção, ao excluir uma categoria, todos os produtos associados serão removidos.</p>
                <DeleteCategoryForm data={data} error={error} loading={loading}/>
            </div>
        </div>
    )
}