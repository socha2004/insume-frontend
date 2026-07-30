import { useState } from "react";
import { useUpdateCategoria } from "../../../hooks/Categoria/useUpdateCategoria";

interface Categoria {
    id: number;
    titulo: string;
}

interface EditCategoryFormProps {
    data: Categoria | null;
    loading: boolean;
    error: string;
}


export const EditCategoryForm = (props: EditCategoryFormProps) => {

    const { updateCategoria, loading, error } = useUpdateCategoria()
    const [titulo, setTitulo] = useState(props.data?.titulo ?? "")
    const [success, setSuccess] = useState("")

    if (props.loading) return (<p>Carregando categoria...</p>)
    if (props.error) return (<p>Categoria inválida ou rota não enontrada</p>)
    if (!props.data) return null;

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        await updateCategoria(props.data.id,{ titulo});
       
        setSuccess("Categoria atualizada com sucesso!")

        setTimeout(() => {
            setSuccess("");
        }, 1000);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="flex flex-col">
                    <label className="font-bold">Título</label>
                    <input type="text" defaultValue={props.data.titulo} onChange={(e) => { setTitulo(e.target.value) }} className="p-2 rounded border-1 border-gray-400" />
                </div>
                {loading && <p>Atualizando categoria...</p>}
                {error && <p>{error}</p>}
                {
                    success &&
                    <p className="text-green-600">
                        {success}
                    </p>
                }
                <input type="submit" value="Atualizar" className="mt-4 p-1 bg-green-500 rounded-sm text-amber-50 shadow-md shadow-sm transition-shadow duration-300 hover:shadow-xl" />
            </form>

        </div>
    )
}