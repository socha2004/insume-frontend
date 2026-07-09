export const Navbar = () => {
    return (
        <nav className="flex justify-between items-center mb-[10px] p-[10px] bg-brand-primary text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <h1 className="text-2xl font-bold">
                Insume
            </h1>

            <div className="flex gap-[15px]">
                <a href="#" className="hover:underline">
                    Home
                </a>
                <a href="#" className="hover:underline">
                    Estoque
                </a>
                <a href="#" className="hover:underline">
                    Sobre
                </a>
            </div>
        </nav>
    )
}