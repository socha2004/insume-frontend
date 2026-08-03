import { useParams } from "react-router-dom"
import {useGetInsumoById} from "../../hooks/Insumo/useGetInsumoById"
import { Spinner } from "../../components"

export const EditInsumo = () => {
    const { id } = useParams();
    const { data, loading, error, refetch } = useGetInsumoById(Number(id));

    if(loading) {
        return <Spinner />
    }
    if(error) {
        return <p>Erro: {error}</p>
    }

    return (
        <div>
            Editando Insumo: {id}
        </div>
    )
}