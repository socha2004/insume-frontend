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
                <Link to="/new-insume">
                    Cadastrar Novo Insumo
                </Link>
                <h2 className='text-2xl font-semibold text-gray-700'>Tabela de Insumos</h2>

                <StockTable
                    data={data}
                    loading={loading}
                    error={error}
                    refetch={refetch}
                    onView={(insumo) => navigate(`/insumos/${insumo.id}`)}
                    onDelete={(insumo) => {
                        if (confirm(`Excluir ${insumo.nome}?`)) {
                            excluirInsumo(insumo.id).then(refetch); // refetch já existe no seu hook!
                        }
                    }}
                />
            </div>
        </div>
    )
}