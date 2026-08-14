import { useState } from "react"
import { useCreateCategoria } from "../../../hooks/Categoria/useCreateCategoria";

export const NewCategoryForm = () => {
    const [categoria, setCategoria] = useState("");
    const [success, setSuccess] = useState("")
    const { createCategoria, loading, error } = useCreateCategoria();

    async function handleSubmit(e: React.FormEvent) {

        e.preventDefault();

        await createCategoria(categoria);

        setSuccess("Categoria cadastrada com sucesso!")
        setCategoria("");

        setTimeout(() => {
            setSuccess("");
        }, 1000);
    }

    return (
        <div className="flex justify-center flex-col items-center">
            <h2 className="text-1xl font-bold text-black text-left">Nova Categoria</h2>

            <form onSubmit={handleSubmit} className="mt-4 max-w-sm flex justify-center flex-col items-center">
                <div className="flex flex-col">
                    <label>Titulo da categoria</label>
                    <input
                        type="text"
                        onChange={(e) => setCategoria(e.target.value)}
                        placeholder="Ex: Limpeza, Alimentação"
                        className="p-2 rounded border border-gray-400"
                        value={categoria}
                        required
                    />
                </div>
                {
                    error &&
                    <p>{error}</p>
                }
                {
                    success &&
                    <p className="text-green-600">
                        {success}
                    </p>
                }
                <input
                    type="submit"
                    className="mt-4 w-[50%] p-1 bg-green-500 rounded-sm text-amber-50  shadow-sm transition-shadow duration-300 hover:shadow-xl "
                    value={loading ? "Salvando..." : "Cadastrar"}
                />
            </form>
        </div>
    )
}