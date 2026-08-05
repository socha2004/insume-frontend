import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';
import { Spinner } from "../..";
import emailIcon from "../../../assets/login/email.svg";
import passwordIcon from "../../../assets/login/password.svg";

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const from = (location.state as any)?.from?.pathname || "/";

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            setError("Email ou senha inválidos");
        } finally {
            setLoading(false);
        }
    }
    return (

        <div className="flex flex-col gap-4 items-center bg-white p-4 rounded-md shadow-2xl w-full">
            <h1 className="text-2xl">Login no Sistema</h1>
            <hr className="w-full border-t border-gray-400" />
            <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
                <label className="font-bold">E-mail</label>
                <div className="flex items-center border border-gray-400 rounded-md">
                    <div className="bg-gray-200 p-2 flex items-center rounded-l-md  justify-center h-[41px]">
                        <img src={emailIcon} alt="Ícone de email" height={30} width={30}/>
                    </div>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2"
                    />
                </div>

                <label className="font-bold">Senha</label>
                <div className="flex items-center border border-gray-400 rounded-md">
                    <div className="bg-gray-200 p-2 flex items-center rounded-l-md  justify-center h-[41px]">
                        <img src={passwordIcon} alt="Ícone de senha" height={30} width={30}/>
                    </div>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2"
                    />
                </div>
                
                {error && <p className="text-red-500">{error}</p>}
                <button type="submit" className="bg-brand-success text-white py-2 px-4 rounded-md hover:bg-brand-secondary hover:text-black transition-colors">
                    {loading ? <Spinner size="w-6 h-6" color="border-blue-600" /> : "Login"}
                </button>
                <Link to="/register" className="text-blue-500 hover:underline">
                    Ainda não tem uma conta? Cadastre-se
                </Link>
            </form>
        </div>
    )
}