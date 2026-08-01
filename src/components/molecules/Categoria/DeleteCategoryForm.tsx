import { useState } from "react";
import { useDeleteCategoria } from "../../../hooks/Categoria/useDeleteCategoria";
import { useNavigate } from "react-router-dom";

interface Categoria {
    id: number;
    titulo: string;
}

interface EditCategoryFormProps {
    data: Categoria | null;
    loading: boolean;
    error: string;
}

export const DeleteCategoryForm = (props: EditCategoryFormProps) => {

    const { deleteCategoria, loading, error } = useDeleteCategoria()
    const [titulo, setTitulo] = useState(props.data?.titulo ?? "")
    const [success, setSuccess] = useState("")
    const navigate = useNavigate();

    if (props.loading) return (<p>Carregando categoria...</p>)
    if (props.error) return (<p>Categoria inválida ou rota não enontrada</p>)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        await deleteCategoria(props.data.id);

        setSuccess("Categoria excluída com sucesso!")

        setTimeout(() => {
            setSuccess("");
            navigate(-1);
        }, 1000);

       
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="flex flex-col">
                    <label className="font-bold">Título</label>
                    <input type="text" disabled defaultValue={props.data.titulo}  className="p-2 rounded border border-gray-400" />
                </div>
                {loading && <p>Excluindo categoria...</p>}
                {error && <p>{error}</p>}
                {
                    success &&
                    <p className="text-green-600">
                        {success}
                    </p>
                    
                }
                <input type="submit" value="Excluir" className="mt-4 p-1 bg-red-500 rounded-sm text-amber-50 shadow-sm transition-shadow duration-300 hover:shadow-xl" />
            </form>

        </div>
    )
}