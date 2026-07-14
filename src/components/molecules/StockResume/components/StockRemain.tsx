interface StockRemainProps {
    insumo: string;
}

export const StockRemain = (props: StockRemainProps) => {
    return (
        <div className="p-4">
            <h2 className='text-3xl font-semibold text-gray-700'>Itens com estoque baixo</h2>
            <p className='text-gray-500'>Insumo: {props.insumo}</p>
        </div>
    )
}