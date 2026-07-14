interface StockByCategoryProps {
    titulo: string;
    quantidade: number;
}


export const StockByCategory = (props: StockByCategoryProps) => {
    return (
        <div className="p-4">
            <h2 className='text-3xl font-semibold text-gray-700'>Estoque por categoria</h2>

            <div>
                <h3 className='text-xl font-medium text-gray-600'>{props.titulo}</h3>
                <p className='text-gray-500'>Quantidade: {props.quantidade}</p>
            </div>
        </div>
    )
}