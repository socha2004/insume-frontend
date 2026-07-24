interface StockRemainProps {
    data: object[] | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export const StockRemain = (props: StockRemainProps) => {

    if (props.data === null && props.loading) return <p>Carregando dashboard...</p>;
    if (props.error) return <p>Erro: {props.error}</p>;

    return (
        <div className="mt-4">
            <h2 className='text-3xl font-semibold text-gray-700'>Itens com estoque baixo</h2>
            <ul className="border-gray-300 border-2 rounded-lg p-4 mt-2">
                {props.data
                    ?.filter((insumo) => insumo.quantidade < insumo.estoqueMinimo)
                    .map((insumo) => {
                        const percentual =
                            (insumo.quantidade / insumo.estoqueMinimo) * 100;

                        return (
                            <li key={insumo.id} className="mb-4">
                                <div className="flex justify-between items-center mb-2 font-bold">
                                    <span>{insumo.nome}</span> 
                                    <span>{insumo.quantidade} de {insumo.estoqueMinimo}</span> 
                                </div>

                                <div className="w-full h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-full bg-red-500 rounded-full"
                                        style={{
                                            width: `${percentual}%`,
                                        }}
                                    />
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </div>
    )
}