import NavbarIcon from '../../../assets/box-icon.svg'
import { useAuth } from '../../../context/AuthContext'
import { Link, NavLink } from "react-router-dom"
import { useState } from 'react';
import { useViewport } from '../../../hooks/useViewport'
import { HamburgerMenu } from '../../../components';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { usuario, logout } = useAuth();

    const { width } = useViewport();

    const isMobile = width < 768

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenuOnMobile = () => {
        if (isMobile) {
            setIsMenuOpen(false)
        }
    }
    return (
        <header className="fixed top-0 left-0 right-0 z-50 "  translate="no">
            <nav className="bg-cyan-800 text-white shadow-md">
                <div className="flex justify-between items-center p-3">

                    {/* Logo */}
                    <h1 className="text-2xl font-bold flex items-center gap-2">
                        <img src={NavbarIcon} alt="Logo" className="w-8 h-8" />
                        Insume
                    </h1>

                    {/* Desktop */}
                    {!isMobile && (
                        <div className="flex items-center gap-5">
                            <span>Bem-vindo! {usuario?.nome}  |</span>

                            <Link to="/">Home</Link>
                            <Link to="/stock">Estoque</Link>
                            <Link to="/category">Categoria</Link>

                            <button onClick={logout}>
                                Sair
                            </button>
                        </div>
                    )}

                    {/* Mobile */}
                    {isMobile && (
                        <button
                            onClick={toggleMenu}
                            className="text-3xl"
                        >
                           <HamburgerMenu />
                        </button>
                    )}
                </div>

                {/* Menu Mobile */}
                {isMobile && isMenuOpen && (
                    <div className="flex flex-col border-t border-cyan-700">

                        <span className="px-4 py-3">
                            Bem-vindo! {usuario?.nome}
                        </span>

                        <Link
                            to="/"
                            onClick={closeMenuOnMobile}
                            className="px-4 py-3 hover:bg-cyan-700"
                        >
                            Home
                        </Link>

                        <Link
                            to="/stock"
                            onClick={closeMenuOnMobile}
                            className="px-4 py-3 hover:bg-cyan-700"
                        >
                            Estoque
                        </Link>

                        <Link
                            to="/category"
                            onClick={closeMenuOnMobile}
                            className="px-4 py-3 hover:bg-cyan-700"
                        >
                            Categorias
                        </Link>

                        <button
                            onClick={() => {
                                logout();
                                closeMenuOnMobile();
                            }}
                            className="text-left px-4 py-3 hover:bg-cyan-700"
                        >
                            Sair
                        </button>

                    </div>
                )}
            </nav>
        </header>

    )
}