interface StockCardProps {
    icon: React.ReactNode;
    label: string;
    value: string | number;
    color?: string;
    textColor?: string;
}

export const StockCard = (props: StockCardProps) => {
    return (
        <div 
        className={`p-4 flex items-center gap-4 shadow-md max-w-fit mt-3 rounded-md`}
        style={{ backgroundColor: props.color || 'white' }}
        >
            <div>
                {props.icon}
            </div>
            <div className='flex flex-col'>
                <span style={{ color: props.textColor || 'gray' }}>
                    {props.label}
                </span>
                <span  style={{ color: props.textColor || 'gray' }}>
                    {props.value}
                </span>
            </div>
        </div>
    )
}