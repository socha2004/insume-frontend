import NavbarIcon from '/public/navbar-icon.svg'
import { useAuth } from '../../../context/AuthContext'
import { Link } from "react-router-dom"

export const Navbar = () => {
    const { usuario, logout } = useAuth();

    return (
        <nav className="flex justify-between items-center mb-[10px] p-[10px] bg-brand-primary text-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
            <h1 className="text-2xl font-bold flex items-center gap-[10px] ">
                <img src={NavbarIcon} alt="Insume Logo" className="w-[30px] h-[30px]" />
                Insume
            </h1>

            <div className="flex gap-[15px]">
                <span>
                    {usuario ? `Bem-vindo! ${usuario.nome} |` : 'Não autenticado'}
                </span>
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/stock" className="hover:underline">
                    Estoque
                </Link>
                <Link to="/about" className="hover:underline">
                    Sobre
                </Link>
                <button onClick={logout} className="hover:underline">
                    Sair
                </button>
            </div>
        </nav>
    )
}