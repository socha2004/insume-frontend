import { Spinner } from "../../../atoms/spinner/spinner";
interface StockRemainProps {
    data: object[] | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

export const StockRemain = (props: StockRemainProps) => {

    const insumosEstoqueBaixo = props.data?.filter((insumo) => insumo.quantidade < insumo.estoqueMinimo)
        .map((insumo) => {
            const percentual =
                (insumo.quantidade / insumo.estoqueMinimo) * 100;
                return { ...insumo, percentual };
        }) ?? [];

    if (props.data === null && props.loading) return (
        <div className="flex justify-center items-center h-32 mt-4 w-full">
            <Spinner size="w-10 h-10" />
        </div>
    );
    if (props.error) return <p>Erro: {props.error}</p>;

    return (
        <div className="mt-4 w-full">
            <h2 className='text-3xl font-semibold text-gray-700'>Itens com estoque baixo</h2>
            <ul className="border-gray-300 border-2 rounded-lg p-4 mt-2">
                {insumosEstoqueBaixo.length == 0 && (
                    <p className="text-gray-500">Nenhum item com estoque baixo encontrado.</p>
                )}
                
                {props.loading && (
                    <div className="flex justify-center items-center h-32">
                        <Spinner size="w-10 h-10" />
                    </div>
                )}

                {insumosEstoqueBaixo?.map((insumo) => {
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
                                            width: `${insumo.percentual}%`,
                                        }}
                                    />
                                </div>
                            </li>
                        );
                } )}
            </ul>
        </div>
    )
}