import { useState } from "react";
import { useCategoria } from "../../../hooks/Categoria/useCategoria";
import { useCreateInsumo } from "../../../hooks/Insumo/useCreateInsumo";

export const NewInsumeForm = () => {
    const { data } = useCategoria();
    const { createInsumo, loading, error } = useCreateInsumo();
    const [success, setSuccess] = useState("");

    const [formData, setFormData] = useState({
        nome: "",
        quantidade: 0,
        unidadeMedida: "",
        estoqueMinimo: 0,
        dataValidade: "",
        marca: "",
        observacao: "",
        idCategoria: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            ...formData,
            dataValidade: formData.dataValidade || null,
        };

        try {
            await createInsumo(payload);
            setSuccess("Insumo cadastrado com sucesso!");
            setTimeout(() => {
                setSuccess("");
            }, 1000);
        } catch (e) {
            console.log("Um erro aconteceu ao cadastrar o insumo:", e)
        } finally {
            setFormData({
                nome: "",
                quantidade: 0,
                unidadeMedida: "",
                estoqueMinimo: 0,
                dataValidade: "",
                marca: "",
                observacao: "",
                idCategoria: 0,
            });
        }
    };

    return (
        <div>
            <span className="font-bold text-red-400 text-sm " translate="no">* Lembre-se de cadastrar uma categoria previamente para prosseguir com o cadastro do insumo.</span>
            <h2 className="text-1xl font-bold text-black text-left mt-4">Identificação do Insumo</h2>
            <hr className="border border-gray-300 mb-2 " />
            <form method="POST" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                        <label>* Nome do Insumo</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="text" name="nome" value={formData.nome} onChange={handleInputChange} required />
                    </div>

                    <div className="flex flex-col">
                        <label>* Categoria de Insumo</label>
                        <select className="p-2 rounded border-1 border-gray-400" name="idCategoria" value={formData.idCategoria} onChange={handleInputChange} required>
                            <option value="default">-- Selecione uma categoria --</option>
                            {data?.map((categoria) => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.titulo}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label>Marca</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="text" name="marca" value={formData.marca} onChange={handleInputChange} />
                    </div>

                    <div className="flex flex-col">
                        <label>Data de Validade</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="date" name="dataValidade" value={formData.dataValidade} onChange={handleInputChange} />
                    </div>
                </div>

                <h2 className="text-1xl font-bold text-black text-left mt-4">Estoque do Insumo</h2>
                <hr className="border border-gray-300 mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col">
                        <label>* Quantidade mínima</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="number" name="estoqueMinimo" value={formData.estoqueMinimo} onChange={handleInputChange} min="0" required />
                    </div>

                    <div className="flex flex-col">
                        <label>Unidade de Medida</label>
                        <select required className="p-2 rounded border border-gray-400" name="unidadeMedida" value={formData.unidadeMedida} onChange={handleInputChange}>
                            <option value="Litro">Litro</option>
                            <option value="Caixa">Caixa</option>
                            <option value="Unidade">Unidade</option>
                            <option value="Kilo">Kilo</option>
                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label>* Quantidade Atual</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="number" name="quantidade" value={formData.quantidade} onChange={handleInputChange} min="0" required />
                    </div>

                    <div className="flex flex-col">
                        <label>Observação</label>
                        <input className="p-2 rounded border-1 border-gray-400" type="text" name="observacao" value={formData.observacao} onChange={handleInputChange} />
                    </div>
                </div>




                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}

                <div className="flex justify-center mt-4">
                    <input type="submit" value={loading ? "Cadastrando..." : "Cadastrar Insumo"} className="p-3 bg-green-500 rounded-2xl text-amber-50 shadow-md " />
                </div>
            </form>
        </div>
    )
}