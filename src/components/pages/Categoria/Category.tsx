import { useCategoria } from "../../../hooks/Categoria/useCategoria"
import { CategoryTable } from "../..";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Category = () => {
    const {data, error, loading, refetch} = useCategoria();

    const navigate = useNavigate();
    return (
        <div className="p-4">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Categorias Atuais</h1>
            </div>

             <div className="mt-4 p-4 rounded-lg shadow-md border-gray-300 border-1">
                <Link to="/new-category" className="text-amber-50 hover:underline text-sm p-2 bg-blue-400 rounded-sm mb-2 shadow-sm transition-shadow duration-300 hover:shadow-xl">Cadastrar Nova Categoria</Link>
                <h3 className=" mt-3 text-1xl font-semibold text-gray-700">Tabela de Categorias</h3>
                <CategoryTable data={data} error={error} loading={loading} onView={(categoria) => navigate(`/edit-category/${categoria.id}`)} onDelete={(categoria) => navigate(`/delete-category/${categoria.id}`)}/>
             </div>
        </div>
    )
}