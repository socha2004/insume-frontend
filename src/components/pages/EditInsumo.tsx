import { useParams } from "react-router-dom"

export const EditInsumo = () => {
    const { id } = useParams();

    return (
        <div>
            Editando Insumo: {id}
        </div>
    )
}