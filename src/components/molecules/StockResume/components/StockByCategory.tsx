interface StockByCategoryProps {
    data: any[] | null;
    loading: boolean;
    error: string | null;
    refetch: () => void;
    titulo: string;
    quantidade: number;
}


export const StockByCategory = (props: StockByCategoryProps) => {
    if (props.loading) return <p>Carregando dashboard...</p>;
    if (props.error) return <p>Erro ao carregar dashboard: {props.error}</p>;

    const categorias = props.data?.reduce((acc, insumo) => {
        const categoria = insumo.categoria;

        if (!acc[categoria]) {
            acc[categoria] = 0;
        }

        acc[categoria]++;

        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="mt-4">
            <h2 className='text-3xl font-semibold text-gray-700'>Estoque por categoria</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {categorias && Object.keys(categorias).length === 0 && (
                    <p className="text-gray-500">Sem dados para exibir. Preencha seu estoque!</p>
                )}
                {Object.entries(categorias ?? {}).map(
                    ([categoria, quantidade]) => (
                        <div
                            key={categoria}
                            className="p-4 rounded-lg shadow bg-white"
                        >
                            <h2 className="text-lg font-semibold">
                                {categoria}
                            </h2>

                            <p className="text-3xl font-bold">
                                {quantidade}
                            </p>

                            <span className="text-gray-500">
                                insumos
                            </span>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}