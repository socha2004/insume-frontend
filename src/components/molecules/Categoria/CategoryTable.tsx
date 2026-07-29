import { useState, useEffect, useMemo } from "react"

interface Category {
    id: number
    nome: string
}

interface CategoryTableProps {
    data: object
    loading: boolean;
    error: string | null;
    refetch: () => void;
    onView?: (categoria: Categoria) => void;
    onDelete?: (categoria: Categoria) => void;
}

export const CategoryTable = (props: CategoryTableProps) => {
    const [busca, setBusca] = useState("");
    const [paginaAtual, setPaginaAtual] = useState(1);

    const ITENS_POR_PAGINA = 8;

    const dadosFiltrados = useMemo(() => {
        if (!props.data) return [];
        return props.data.filter((categoria) => {
            const buscaBox = categoria.titulo
                .toLowerCase()
                .includes(busca.toLowerCase());
            return buscaBox
        })
    }, [props.data, busca]);

    const totalPaginas = Math.max(
        1,
        Math.ceil(dadosFiltrados.length / ITENS_POR_PAGINA)
    );
    const paginaSegura = Math.min(paginaAtual, totalPaginas);

    const itensDaPagina = useMemo(() => {
        const inicio = (paginaSegura - 1) * ITENS_POR_PAGINA;
        return dadosFiltrados.slice(inicio, inicio + ITENS_POR_PAGINA);
    }, [dadosFiltrados, paginaSegura]);

    const atualizarBusca = (valor: string) => {
        setBusca(valor);
        setPaginaAtual(1);
    };

    const irParaPagina = (pagina: number) => {
        if (pagina < 1 || pagina > totalPaginas) return;
        setPaginaAtual(pagina);
    };

    if (props.data === null && props.loading) return <p>Carregando insumos..</p>;
    if (props.error) return <p>Erro: {props.error}</p>;

    return (
        <div className="mt-2">
            {/* Controle de busca */}
            <div className="flex gap-2 mb-3">
                <input
                    type="text"
                    placeholder="Buscar por nome..."
                    value={busca}
                    onChange={(e) => atualizarBusca(e.target.value)}
                    className="border border-gray-300 p-2 rounded flex-1"
                />
            </div>

            <table className="border-collapse border border-gray-400 w-full">
                <thead>
                    <tr>
                        <th className="border bg-gray-200 border-gray-300 p-2 w-[10%] text-center">ID</th>
                        <th className="border bg-gray-200 border-gray-300 p-2">Titulo</th>
                        <th className="border bg-gray-200 border-gray-300 p-2 w-[15%]">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {itensDaPagina.length === 0 ? (
                        <tr>
                            <td colSpan={7} className="border border-gray-300 p-4 text-center text-gray-400">
                                Nenhuma categoria cadastrada.
                            </td>
                        </tr>
                    ) : (
                        itensDaPagina.map((categoria) => (
                            <tr key={categoria.id}>
                                <td className="border border-gray-300 p-2 text-center">{categoria.id}</td>
                                <td className="border border-gray-300 p-2 text-center">{categoria.titulo}</td>
                                <td className="border border-gray-300 p-2">
                                    <div className="flex gap-2 justify-center">
                                        <button
                                            onClick={() => props.onView?.(categoria)}
                                            className="text-amber-50 hover:underline text-sm p-2 bg-green-500 rounded-sm"
                                        >
                                            Visualizar
                                        </button>
                                        <button
                                            onClick={() => props.onDelete?.(categoria)}
                                            className="text-amber-50 hover:underline text-sm bg-red-500 rounded-sm p-2"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
                <span>
                    {dadosFiltrados.length} {dadosFiltrados.length === 1 ? "resultado" : "resultados"} · Página {paginaSegura} de {totalPaginas}
                </span>
                <div className="flex gap-1">
                    <button
                        onClick={() => irParaPagina(paginaSegura - 1)}
                        disabled={paginaSegura === 1}
                        className="border border-gray-300 px-2 py-1 rounded disabled:opacity-30"
                    >
                        Anterior
                    </button>
                    <button
                        onClick={() => irParaPagina(paginaSegura + 1)}
                        disabled={paginaSegura === totalPaginas}
                        className="border border-gray-300 px-2 py-1 rounded disabled:opacity-30"
                    >
                        Próxima
                    </button>
                </div>
            </div>
        </div>
    )
}  