import { StockTable } from "../../components"
import { useDashboard } from "../../hooks/useDashboard"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const Stock = () => {
    const { data, loading, error, refetch } = useDashboard();
    const navigate = useNavigate();

    return (
        <div className="p-4">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Visualize aqui seu estoque atual</h1>
            </div>

            <div className="mt-4 p-4 rounded-lg shadow-md border-gray-300 border-1">
                <Link to="/new-insume" className="mr-2 text-amber-50 hover:underline text-sm p-2 bg-green-400 rounded-sm mb-2 shadow-sm transition-shadow duration-300 hover:shadow-xl">
                    Cadastrar Novo Insumo
                </Link>

                <Link to="/category" className="text-amber-50 hover:underline text-sm p-2 bg-blue-400 rounded-sm mb-2 shadow-sm transition-shadow duration-300 hover:shadow-xl">
                    Visualizar Categorias
                </Link>

                <h2 className='mt-3 text-2xl font-semibold text-gray-700'>Tabela de Insumos</h2>

                <StockTable
                    data={data}
                    loading={loading}
                    error={error}
                    refetch={refetch}
                    onView={(insumo) => navigate(`/edit-insume/${insumo.id}`)}
                    onDelete={(insumo) => navigate(`/delete-insume/${insumo.id}`)}
                />
            </div>
        </div>
    )
}