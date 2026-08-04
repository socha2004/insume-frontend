import { useState, useMemo } from "react";

interface Insumo {
  id: string | number;
  nome: string;
  quantidade: number;
  unidadeMedida: string;
  estoqueMinimo: number;
  marca: string;
  categoria: string;
}

interface StockTableProps {
  data: Insumo[] | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
  onView?: (insumo: Insumo) => void;
  onDelete?: (insumo: Insumo) => void;
}

const ITENS_POR_PAGINA = 8;

export const StockTable = (props: StockTableProps) => {
  const [busca, setBusca] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("Todas");
  const [paginaAtual, setPaginaAtual] = useState(1);

  // Lista única de marcas presentes nos dados, pro select de filtro
  const categorias = useMemo(() => {
    if (!props.data) return ["Todas"];
    const unicas = new Set(props.data.map((i) => i.categoria).filter(Boolean));
    return ["Todas", ...Array.from(unicas)];
  }, [props.data]);

  // Filtra por nome (busca) e por marca (filtro de coluna)
  const dadosFiltrados = useMemo(() => {
    if (!props.data) return [];
    return props.data.filter((insumo) => {
      const combinaBusca = insumo.nome
        .toLowerCase()
        .includes(busca.toLowerCase());
      const combinaMarca = categoriaFiltro === "Todas" || insumo.categoria === categoriaFiltro;
      return combinaBusca && combinaMarca;
    });
  }, [props.data, busca, categoriaFiltro]);

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

  const atualizarMarca = (valor: string) => {
    setCategoriaFiltro(valor);
    setPaginaAtual(1);
  };

  const irParaPagina = (pagina: number) => {
    if (pagina < 1 || pagina > totalPaginas) return;
    setPaginaAtual(pagina);
  };

  if (props.data === null && props.loading) return <p>Carregando insumos..</p>;
  if (props.error) return <p>Erro: {props.error}</p>;

  return (
    <div>
      {/* Controles de busca e filtro */}
      <div className="flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={busca}
          onChange={(e) => atualizarBusca(e.target.value)}
          className="border border-gray-300 p-2 rounded flex-1"
        />
        <select
          value={categoriaFiltro}
          onChange={(e) => atualizarMarca(e.target.value)}
          className="border border-gray-300 p-2 rounded"
        >
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>

      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="font-bold">
            <td className="border border-gray-300 p-2">Id</td>
            <td className="border border-gray-300 p-2">Nome</td>
            <td className="border border-gray-300 p-2">Quantidade</td>
            <td className="border border-gray-300 p-2">Un. Medida</td>
            <td className="border border-gray-300 p-2">Estoque Minimo</td>
            <td className="border border-gray-300 p-2">Marca</td>
            <td className="border border-gray-300 p-2">Categoria</td>
            <td className="border border-gray-300 p-2">Ações</td>
          </tr>
        </thead>
        <tbody>
          {itensDaPagina.length === 0 ? (
            <tr>
              <td colSpan={7} className="border border-gray-300 p-4 text-center text-gray-400">
                Nenhum insumo encontrado.
              </td>
            </tr>
          ) : (
            itensDaPagina.map((insumo) => (
              <tr key={insumo.id}>
                <td className="border border-gray-300 p-2">{insumo.id}</td>
                <td className="border border-gray-300 p-2">{insumo.nome}</td>
                <td className="border border-gray-300 p-2">{insumo.quantidade}</td>
                <td className="border border-gray-300 p-2">{insumo.unidadeMedida}</td>
                <td className="border border-gray-300 p-2">{insumo.estoqueMinimo}</td>
                <td className="border border-gray-300 p-2">{insumo.marca}</td>
                <td className="border border-gray-300 p-2">{insumo.categoria}</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => props.onView?.(insumo)}
                      className="text-amber-50 hover:underline text-sm p-2 bg-green-500 rounded-sm"
                    >
                      Visualizar
                    </button>
                    <button
                      onClick={() => props.onDelete?.(insumo)}
                     className="text-amber-50 hover:underline text-sm p-2 bg-red-500 rounded-sm"
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

      {/* Controles de paginação */}
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
  );
};