import { useState } from "react";
import { useUpdateInsumo } from "../../../hooks/Insumo/useUpdateInsumo";
import { useCategoria } from "../../../hooks/Categoria/useCategoria"; 

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

export const EditInsumeForm = (props: EditInsumeFormProps) => {
    const [formData, setFormData] = useState<Insumo | null>(props.data);
    const { loading, error, updateInsumo } = useUpdateInsumo();
    const [success, setSuccess] = useState("")
    const {data} = useCategoria();

    const hoje = new Date().toISOString().split("T")[0];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => prev ? { ...prev, [name]: value } : null);
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        await updateInsumo(props.data?.id, formData);

        setSuccess("Insumo atualizado com sucesso!");

        setTimeout(() => {
            setSuccess("");
        }, 1000);
    }


    console.log(formData?.dataValidade);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    <div className="flex flex-col">
                        <label className="font-bold">Nome do Insumo</label>
                        <input
                            type="text"
                            defaultValue={props.data?.nome}
                            onChange={handleChange} name="nome"
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Quantidade Atual</label>
                        <input
                            type="text"
                            defaultValue={props.data?.quantidade}
                            onChange={handleChange} name="quantidade"
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Quantidade Mínima</label>
                        <input
                            type="text"
                            defaultValue={props.data?.estoqueMinimo}
                            onChange={handleChange} name="estoqueMinimo"
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Data de Validade</label>
                        <input
                            type="date"
                            value={formData?.dataValidade ?? ""}
                            onChange={handleChange} name="dataValidade"
                            className="p-2 rounded border border-gray-400"
                            min={hoje}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Marca</label>
                        <input
                            type="text"
                            defaultValue={props.data?.marca}
                            onChange={handleChange} name="marca"
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Unidade de Medida</label>
                        <input
                            type="text"
                            defaultValue={props.data?.unidadeMedida}
                            onChange={handleChange} name="unidadeMedida"
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Categoria</label>
                        <select value={formData?.idCategoria} onChange={handleChange} name="idCategoria" className="p-2 rounded border border-gray-400">
                            {/* <option key={props.data?.idCategoria} value={props.data?.idCategoria}>{props.data?.categoria}</option> */}
                            {data?.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.titulo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label className="font-bold">Observação</label>
                        <input
                            type="text"
                            defaultValue={props.data?.observacao}
                            onChange={handleChange} name="observacao"
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>
                </div>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
                <div className="flex justify-center mt-4">
                    <input type="submit" value={loading ? "Atualizando..." : "Atualizar Insumo"} className="p-3 bg-green-500 rounded-2xl text-amber-50 shadow-md " />
                </div>
            </form>
        </div>
    )
}