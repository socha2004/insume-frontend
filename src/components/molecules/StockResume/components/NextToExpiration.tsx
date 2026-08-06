import {Spinner} from "../../../../components"

interface NextToExpirationProps {
    data: object[] | null;
    loading: boolean;
    error: string | null;
}

export const NextToExpiration = (props: NextToExpirationProps) => {
    return (
        <div className="mt-4 w-full">
            <h2 className="text-3xl font-semibold text-gray-700">Próximos a Vencer</h2>

            <ul className="border-gray-300 border-2 rounded-lg p-4 mt-2">
                {props.data && props.data.length === 0 && (
                    <p className="text-gray-500">Nenhum item próximo a vencer encontrado.</p>
                )}

                {props.loading && (
                    <div className="flex justify-center items-center h-32">
                        <Spinner size="w-10 h-10"/>
                    </div>
                )}

                {props.error && (
                    <p className="text-red-500">Erro: {props.error}</p>
                )}

                {props.data?.filter((insumo) => {
                    const vencimento = new Date(insumo.dataValidade);
                    const hoje = new Date();
                    const diffTime = vencimento.getTime() - hoje.getTime();
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                    return diffDays <= 30 && diffDays >= 0;
                })
                .map((insumo) => {
                    const vencimento = new Date(insumo.dataValidade);
                    const hoje = new Date();
                    const diffTime = vencimento.getTime() - hoje.getTime();
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    return (
                        <li key={insumo.id} className="mb-4">
                            <div className="flex justify-between items-center mb-2 font-bold">
                                <span>{insumo.nome}</span>
                                <span>{diffDays} dias restantes</span>
                            </div>
                            <hr className="border border-gray-300"/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}