import { Link } from "react-router-dom"
 
export const Footer = () => {
    return (
        <footer className="block bottom-0 left-0 right-0 bg-gray-800 text-white py-4 mt-[5%]">
            <div className="container mx-auto px-4">
                <p className="text-center">&copy; 2026 Eugenio Socha. Todos os direitos reservados. | <Link to='/privacy'>Política de Privacidade - Termos de Uso</Link></p>
            </div>
        </footer>
    )
}