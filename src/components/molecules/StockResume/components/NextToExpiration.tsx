import {Spinner} from "../../../../components"

interface Insumo {
    id: string | number;
    nome: string;
    dataValidade: string;
}

interface NextToExpirationProps {
    data: Insumo[] | null;
    loading: boolean;
    error: string | null;
}

const DIAS_LIMITE = 30;

const calcularDiasRestantes = (dataValidade: string): number => {
    const vencimento = new Date(dataValidade);
    const hoje = new Date();
    const diffTime = vencimento.getTime() - hoje.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const NextToExpiration = (props: NextToExpirationProps) => {
    const itensProximos = props.data?.filter((insumo) => {
        const diffDays = calcularDiasRestantes(insumo.dataValidade);
        return diffDays <= DIAS_LIMITE && diffDays >= 0;
    }) ?? [];

    return (
        <div className="mt-4 w-full">
            <h2 className="text-3xl font-semibold text-gray-700">Próximos a Vencer</h2>

            <ul className="border-gray-300 border-2 rounded-lg p-4 mt-2">
                {props.loading && (
                    <div className="flex justify-center items-center h-32">
                        <Spinner size="w-10 h-10"/>
                    </div>
                )}

                {props.error && (
                    <p className="text-red-500">Erro: {props.error}</p>
                )}

                {!props.loading && !props.error && props.data && props.data.length === 0 && (
                    <p className="text-gray-500">Nenhum item próximo a vencer encontrado.</p>
                )}

                {!props.loading && !props.error && props.data && props.data.length > 0 && itensProximos.length === 0 && (
                    <p className="text-gray-500">Sem produtos próximos do vencimento.</p>
                )}

                {itensProximos.map((insumo) => {
                    const diffDays = calcularDiasRestantes(insumo.dataValidade);

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