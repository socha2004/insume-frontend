export const NewInsumeForm = () => {
    return (
        <div>
            <h2 className="text-1xl font-bold text-black text-left">Formulário para cadastro</h2>

            <form method="POST" >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                        <label>Nome do Insumo</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="text" name="nome-insumo" required />
                    </div>
                    <div className="flex flex-col">
                        <label>Quantidade Atual</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="number" name="quatidade-insumo" min="0" required />
                    </div>
                    <div className="flex flex-col">
                        <label>Quantidade Minima</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="number" name="minimo-insumo" min="0" required />
                    </div>
                    <div className="flex flex-col">
                        <label>Data de Validade</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="date" name="validade-insumo" />
                    </div>
                    <div className="flex flex-col">
                        <label>Marca</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="text" name="marca-insumo" />
                    </div>
                    <div className="flex flex-col">
                        <label>Categoria de Insumo</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="radio" value={2} name="marca-insumo" />
                    </div>
                </div>

                <div>
                    <div className="flex flex-col">
                        <label>Observação</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="text" name="marca-insumo" />
                    </div>
                </div>

                <div className="flex justify-center mt-4">
                    <button type="submit" className="p-3 bg-green-500 rounded-2xl text-amber-50 shadow-md ">Cadastrar Insumo</button>
                </div>

            </form>
        </div>
    )
}