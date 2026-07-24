import { useDashboard } from '../../../../hooks/useDashboard';
interface StockRemainProps {
    data: object[] | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export const StockRemain = (props: StockRemainProps) => {
    const { data, loading, error, refetch } = useDashboard();

    if (props.data === null && props.loading) return <p>Carregando dashboard...</p>;
    if (props.error) return <p>Erro: {props.error}</p>;

    return (
        <div className="mt-4">
            <h2 className='text-3xl font-semibold text-gray-700'>Itens com estoque baixo</h2>
            <ul>
                {props.data?.map((insumo) => (
                    <li key={insumo.id}>
                        {insumo.quantidade < insumo.estoqueMinimo && <p>{insumo.nome} - Quantidade: {insumo.quantidade}</p>}
                    </li>
                ))}
            </ul>
        </div>
    )
}