import { NewInsumeForm } from "../../components"

export const NewInsume = () => {
    return (
        <div className="p-4">
            <div>
                <h1 className="text-2xl font-bold text-black text-center">Cadastro de Insumo</h1>
            </div>

            <div className="mt-4 p-4 rounded-lg shadow-md border-gray-300 border-1">
                <NewInsumeForm />
            </div>
        </div>
    )
}