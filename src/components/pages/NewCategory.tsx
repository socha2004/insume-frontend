import { NewCategoryForm } from "../../components"

export const NewCategory = () => {
    return (
        <div className="p-4 flex flex-col items-center">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Cadastro de Categoria</h1>
            </div>

            <div className="mt-4 p-4 rounded-lg shadow-md border-gray-300 border-1 w-[fit-content]">
                <NewCategoryForm />
            </div>
        </div>
    )
}