import { useState } from "react";
import { useDeleteInsumo } from "../../../hooks/Insumo/useDeleteInsumo";
import { formatarData } from "../../../utils/formataData";
import { Spinner } from "../../atoms/spinner/spinner";
import {useNavigate} from "react-router-dom";

interface Insumo {
    id: number;
    nome: string;
    quantidade: number;
    unidadeMedida: string;
    estoqueMinimo: number;
    dataValidade: string;
    marca: string;
    observacao: string;
    idCategoria: number | string;
    categoria: string;
}

interface EditInsumeFormProps {
    data: Insumo | null;
    loading: boolean;
    error: string;
}

export const DeleteInsumeForm = (props: EditInsumeFormProps) => {
    const [formData, setFormData] = useState<Insumo | null>(props.data);
    const { loading, error, deleteInsumo } = useDeleteInsumo();
    const navigate = useNavigate();
    const [success, setSuccess] = useState("")

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await deleteInsumo(props.data?.id);

        setSuccess("Insumo deletado com sucesso!");

        setTimeout(() => {
            setSuccess("");
            navigate(-1);
        }, 1500);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    <div className="flex flex-col">
                        <label className="font-bold">Nome do Insumo</label>
                        <input
                            type="text"
                            defaultValue={props.data?.nome}
                            disabled
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Quantidade Atual</label>
                        <input
                            type="text"
                            defaultValue={props.data?.quantidade}
                            disabled
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Quantidade Mínima</label>
                        <input
                            type="text"
                            defaultValue={props.data?.estoqueMinimo}
                            disabled
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Data de Validade</label>
                        <input
                            type="text"
                            defaultValue={formatarData(props.data?.dataValidade)}
                            disabled
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Marca</label>
                        <input
                            type="text"
                            defaultValue={props.data?.marca}
                            disabled
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Unidade de Medida</label>
                        <input
                            type="text"
                            defaultValue={props.data?.unidadeMedida}
                            disabled
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Categoria</label>
                        <select value={formData?.idCategoria} disabled className="p-2 rounded border border-gray-400">
                            <option key={props.data?.idCategoria} value={props.data?.idCategoria}>{props.data?.categoria}</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Observação</label>
                        <input
                            type="text"
                            defaultValue={props.data?.observacao}
                            className="p-2 rounded border border-gray-400"
                            disabled
                        />
                    </div>
                </div>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
                <div className="flex justify-center mt-4">
                    <button type="submit" className="p-3 bg-red-500 rounded-2xl text-amber-50 shadow-md ">
                        {loading ? <Spinner /> : "Deletar Insumo"}
                    </button>
                </div>
            </form>
        </div>
    )
}