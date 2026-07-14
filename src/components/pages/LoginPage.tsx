import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const from = (location.state as any)?.from?.pathname || "/";

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await login(email, password);
            navigate(from, { replace: true });
        } catch (err) {
            setError("Email ou senha inválidos");
        }
    }
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="flex items-center flex-col gap-4 shadow-sm p-4 rounded-md ">
                <h1 className="text-2xl">Login no Sistema</h1>
                <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border-black p-2 rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border-black p-2 rounded-md"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="bg-brand-success text-white py-2 px-4 rounded-md hover:bg-brand-secondary hover:text-black transition-colors">
                        Login
                    </button>
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Ainda não tem uma conta? Cadastre-se
                    </Link>
                </form>
            </div>

        </div>
    )
}