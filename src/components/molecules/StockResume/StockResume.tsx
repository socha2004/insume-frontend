// Componentes
import { StockCard } from './components/StockCard'
import { StockRemain } from './components/StockRemain'
import { StockByCategory } from './components/StockByCategory';

// Hooks, utils
import { useDashboard } from '../../../hooks/useDashboard';

export const StockResume = () => {
    const { data, loading, error, refetch } = useDashboard();

    return (
        <div className="p-4">
            <h2 className='text-3xl font-semibold text-gray-700'>Resumo de estoque</h2>
            <p className='text-gray-600'>Aqui você pode visualizar um resumo do seu estoque.</p>
            <div className='flex flex-wrap gap-4 mt-4 justify-between'>
                <StockCard icon="📦" label="Total de insumos cadastrados:" data={data} color="#4CAF50" textColor='white' />
            </div>
           
            <StockRemain data={data} loading={loading} error={error} refetch={refetch}/>
            <StockByCategory data={data} loading={loading} error={error} refetch={refetch}/>
            
        </div>
    )
}