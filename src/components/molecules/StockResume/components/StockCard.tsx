import marketIcon from "../../../../assets/market.svg";
import warningIcon from "../../../../assets/warning.svg";
import alarmIcon from "../../../../assets/alarm.svg";
import categoryIcon from "../../../../assets/category.svg";

interface StockCardProps {
    icon: React.ReactNode;
    label: string;
    data: object[] | null;
    categorias: object[] | null;
    color?: string;
    textColor?: string;
}

export const StockCard = (props: StockCardProps) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">

             {/* CARD DE TOTAL DE INSUMOS CADASTRADOS */}
            <div
                className={`p-4 flex items-center gap-4 shadow-md mt-3 rounded-md`}
                style={{ backgroundColor: props.color || 'white' }}
            >
                <div>
                    <img src={marketIcon} width={40} height={40}/>
                </div>

                <div className='flex flex-col'>
                    <span style={{ color: props.textColor || 'gray' }}>
                        Total de insumos cadastrados:
                    </span>
                    <span style={{ color: props.textColor || 'gray' }} className="text-3xl font-bold">
                        {props.data?.length > 0 ? props.data.length : 0}
                    </span>
                </div>
            </div>

            {/* CARD DE INSUMOS EM FALTA */}
            <div className={`p-4 flex items-center gap-4 shadow-md mt-3 rounded-md bg-red-700`}>
                <div>
                    <img src={warningIcon} width={40} height={40}/>
                </div>

                <div className='flex flex-col text-white'>
                    <span>Total de insumos em falta:</span>
                    <span className="text-3xl font-bold">{props.data?.filter((item) => item.quantidade == 0).length || 0}</span>
                </div>
            </div>

            {/* CARD DE INSUMOS ACABANDO */}
            <div className={`p-4 flex items-center gap-4 shadow-md  mt-3 rounded-md bg-orange-600`}>
                <div>
                    <img src={alarmIcon} width={40} height={40}/>
                </div>

                <div className='flex flex-col text-white'>
                    <span>Total de insumos acabando:</span>
                    <span className="text-3xl font-bold">{props.data?.filter((item) => item.quantidade > 0 && item.quantidade < item.estoqueMinimo).length || 0}</span>
                </div>
            </div>

            {/* CARD DE TOTAL DE CATEGORIAS */}
            <div className={`p-4 flex items-center gap-4 shadow-md mt-3 rounded-md bg-blue-600`}>
                <div>
                    <img src={categoryIcon} width={40} height={40}/>
                </div>

                <div className='flex flex-col text-white'>
                    <span>Total de categorias:</span>
                    <span className="text-3xl font-bold">{props.categorias?.length || 0}</span>
                </div>
            </div>
        </div>
    )
}